using Smart.House.Application.Providers;
using System;
using System.Collections.Generic;

namespace Smart.House.Dashboard.Factories
{
    public class CameraProviderFactory : Dictionary<string, Func<ICameraProvider>>, ICameraProviderFactory
    {
        public ICameraProvider Create(string name) => this[name]();
    }
}
