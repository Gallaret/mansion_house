using System.IO;

namespace Smart.House.Application.Providers.Camera
{
    using Camera = Domain.Devices.Entities.Camera;

    public interface ICameraProvider
    { 
        string MotionDirectory { get; }
        bool DetectMotion(Camera camera, FileInfo[] files, out string lastMotionFileName);
        string GetMotionFilePath();
    }
}
