using Smart.House.Application.Providers.Ambilight;
using System;
using System.Collections.Generic;

namespace Smart.House.Ambilight
{
    public class AmbilightProviderFactory : Dictionary<string, Func<IAmbilightProvider>>, IAmbilightProviderFactory
    {
        public IAmbilightProvider Create(string provider) => Count > 0 
            ? this[provider]() : InitializeProviders()[provider]();

        private Dictionary<string, Func<IAmbilightProvider>> InitializeProviders()
        {
            return new Dictionary<string, Func<IAmbilightProvider>>
            {
                { "hyperion", () => new HyperionProvider() }
            };
        }
    }
}
