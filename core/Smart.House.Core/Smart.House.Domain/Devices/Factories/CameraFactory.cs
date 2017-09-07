using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Devices.ValueTypes;

namespace Smart.House.Domain.Devices.Factories
{
    public class CameraFactory
    {
        public Camera Create(string identifier, string provider)
        {
            var camera = new Camera(identifier, provider);

            var motionHarmonogram = new Harmonogram(
                camera.Identifier, HarmonogramType.MotionDetection);
            var recordingHarmonogram = new Harmonogram(
                camera.Identifier, HarmonogramType.Recording);

            camera.AddHarmonogram(motionHarmonogram);
            camera.AddHarmonogram(recordingHarmonogram);

            return camera;
        }
    }
}
