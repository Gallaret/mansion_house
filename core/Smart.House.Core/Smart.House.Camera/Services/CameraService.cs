using Smart.House.Camera.Providers;
using Smart.House.Camera.Specifications;
using Smart.House.Domain.Entities;
using Smart.House.Notification.Factories.Notification;
using System;

namespace Smart.House.Camera.Services
{
    using EventType = Notification.Entities.EventType;

    public class CameraService
    {
        private readonly NotificationFactory _notificationFactory = new NotificationFactory();
        private readonly ICameraProviderFactory _providerFactory;

        public CameraService(ICameraProviderFactory providerFactory)
        {
            _providerFactory = providerFactory;
        }

        public void UpdateMotionStatus(Entities.Camera camera)
        {
            if (!camera.MotionDetectionEnabled) return;

            var provider = _providerFactory.Create(camera.Producent);

            var motionDetected = provider.DetectMotion(camera, out string lastFileName);
            camera.SetMotionDetection(motionDetected, lastFileName);

            var lastNotification = new Notification.Entities.Notification()
            {
                Type = EventType.MotionDetected,
                Unchecked = true,
                Value = ""
            };

            Harmonogram harmonogram = new Harmonogram(
                camera.Identifier, HarmonogramType.MotionDetection);
            harmonogram.Monday = true;
            harmonogram.From = DateTime.Now.TimeOfDay;
            harmonogram.To = DateTime.Now.AddHours(1).TimeOfDay;

            var specification = new CameraSpecification(camera);

            if (!specification.IsInHarmonogram(harmonogram)) return;

            if (!specification.IsNotificable(lastNotification)) return;

            var notify = _notificationFactory.Create(EventType.MotionDetected,
                camera.GetLastMotionFileName());

            camera.AddNotification(notify);
        }
    }
}
