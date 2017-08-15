using Smart.House.Camera.Providers;
using System;
using System.Collections.Generic;

namespace Smart.House.Camera.Factories
{
    public class CameraProviderFactory : Dictionary<string, Func<ICameraProvider>>, ICameraProviderFactory
    {
        public ICameraProvider Create(string name) => this[name]();
    }
}
