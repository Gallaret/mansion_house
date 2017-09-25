using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Devices.Events;
using Smart.House.Domain.Devices.Specifications;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Linq;

namespace Smart.House.Domain.Devices.Services
{
    public class CameraService
    {
        public bool SendMotionDetectedNotification(Camera camera, string notificationValue)
        {
            if (!camera.MotionDetectionEnabled) return false;

            var harmonogram = camera.Harmonograms.Single(
                h => h.Type == EventType.MotionDetection);

            var specification = new CameraSpecification(camera);

            if (!specification.IsInHarmonogram(harmonogram)) return false;

            camera.AddDomainEvent(new MotionDetectedEvent (
                camera.Identifier, notificationValue
            ));

            return true;
        }
    }
}
