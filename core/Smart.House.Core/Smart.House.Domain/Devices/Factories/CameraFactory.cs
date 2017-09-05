using Smart.House.Domain.Devices.ValueTypes;

namespace Smart.House.Domain.Devices.Factories
{
    public class CameraFactory
    {
        public Entities.Camera Create(int id, string producent)
        {
            var camera = new Entities.Camera(id, producent);

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
