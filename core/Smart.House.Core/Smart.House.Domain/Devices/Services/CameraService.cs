using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Devices.Events;
using Smart.House.Domain.Devices.Specifications;
using Smart.House.Domain.Devices.ValueTypes;
using System.Linq;

namespace Smart.House.Domain.Devices.Services
{
    public class CameraService
    {
        public void SendMotionDetectedNotification(Camera camera)
        {
            if (!camera.MotionDetectionEnabled) return;

            var harmonogram = camera.Harmonograms.Single(
                h => h.Type == HarmonogramType.MotionDetection);

            var specification = new CameraSpecification(camera);

            if (!specification.IsInHarmonogram(harmonogram)) return;

            camera.AddDomainEvent(new MotionDetectedEvent (
                camera.Identifier, camera.GetCurrentMotionFileName()
            ));
        }
    }
}
