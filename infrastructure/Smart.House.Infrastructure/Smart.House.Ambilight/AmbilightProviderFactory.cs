using Smart.House.Application.Domain.Devices.Ambilight.Factories;
using Smart.House.Application.Domain.Devices.Ambilight.Providers;
using System;
using System.Collections.Generic;

namespace Smart.House.Ambilight
{
    public class AmbilightProviderFactory : Dictionary<string, Func<IAmbilightProvider>>, IAmbilightProviderFactory
    {
        public IAmbilightProvider Create(string provider) => this[provider]();
    }
}
