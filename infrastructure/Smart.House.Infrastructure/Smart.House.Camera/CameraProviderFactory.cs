using Smart.House.Application.Providers.Camera;
using System;
using System.Collections.Generic;

namespace Smart.House.Camera
{
    public class CameraProviderFactory : Dictionary<string, Func<ICameraProvider>>, ICameraProviderFactory
    {
        public ICameraProvider Create(string provider) => this[provider]();
    }
}
