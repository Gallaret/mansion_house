using System;
using System.Collections.Generic;

namespace Smart.House.Application.Factories.Devices.Camera
{
    using Camera = House.Camera.Entities.Camera;

    public interface ICameraProvider
    {
        bool DetectMotion(Camera camera, out string lastMotionFileName);
    }

    public interface ICameraProviderFactory
    {
        ICameraProvider Create(string name);
    }

    public class CameraProviderFactory : Dictionary<string, Func<ICameraProvider>>, ICameraProviderFactory
    {
        public ICameraProvider Create(string name) => this[name]();
    }
}
