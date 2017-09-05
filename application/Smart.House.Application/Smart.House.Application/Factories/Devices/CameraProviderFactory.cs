using Smart.House.Application.Providers.Camera;
using System;
using System.Collections.Generic;

namespace Smart.House.Application.Factories.Devices
{
    public class CameraProviderFactory : Dictionary<string, Func<ICameraProvider>>, ICameraProviderFactory
    {
        public ICameraProvider Create(string name) => this[name]();
    }
}
