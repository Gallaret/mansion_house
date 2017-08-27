using Smart.House.Camera.Specifications;
using Smart.House.Domain.Entities;
using Smart.House.Domain.Events;
using Smart.House.Notification.Entities;
using Smart.House.Notification.Factories.Notification;
using System.Linq;

namespace Smart.House.Camera.Services
{
    using Notification = Notification.Entities.Notification;

    public class CameraService
    {
        private readonly NotificationFactory _factory = new NotificationFactory();

        public void SendMotionDetectedNotification(Entities.Camera camera, 
            Notification lastMotionNotification)
        {
            if (!camera.MotionDetectionEnabled) return;

            var harmonogram = camera.Harmonograms.Single(
                h => h.Type == HarmonogramType.MotionDetection);

            lastMotionNotification = lastMotionNotification ?? _factory.Create(
                EventType.MotionDetected, null);

            var specification = new CameraSpecification(camera);

            if (!specification.IsInHarmonogram(harmonogram) 
                || !specification.IsNotificable(lastMotionNotification)) return;

            camera.AddDomainEvent(new MotionDetectedEvent
            (
                camera.Identifier, camera.GetLastMotionFileName()
            ));
        }
    }
}
