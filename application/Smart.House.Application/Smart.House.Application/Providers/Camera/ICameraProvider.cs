namespace Smart.House.Application.Providers.Camera
{
    using Domain.Devices.Entities;

    public interface ICameraProvider
    {
        bool DetectMotion(Camera camera, out string lastMotionFileName);
    }
}
