using System.IO;

namespace Smart.House.Application.Providers.Camera
{
    using Camera = Domain.Devices.Entities.Camera;

    public interface ICameraProvider
    {
        void DetectMotion(Camera camera);
    }
}
