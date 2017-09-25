using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Devices.ValueTypes;
using Smart.House.Domain.Notifications.ValueTypes;

namespace Smart.House.Domain.Devices.Factories
{
    public class CameraFactory
    {
        public Camera Create(string identifier, string provider)
        {
            var camera = new Camera(identifier, provider);

            var motionHarmonogram = new Harmonogram(
                camera.Identifier, EventType.MotionDetection);
            var recordingHarmonogram = new Harmonogram(
                camera.Identifier, EventType.Recording);

            camera.AddHarmonogram(motionHarmonogram);
            camera.AddHarmonogram(recordingHarmonogram);

            return camera;
        }
    }
}
