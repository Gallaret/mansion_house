using Smart.House.Application.Providers.Ambilight;
using System;
using System.Collections.Generic;

namespace Smart.House.Application.Factories.Devices
{
    public class AmbilightProviderFactory : Dictionary<string, Func<IAmbilightProvider>>, IAmbilightProviderFactory
    {
        public IAmbilightProvider Create(string provider) => this[provider]();
    }
}
