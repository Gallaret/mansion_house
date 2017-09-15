using Smart.House.Application.Providers.Camera;
using System;
using System.Collections.Generic;

namespace Smart.House.Camera
{
    public class CameraProviderFactory : Dictionary<string, Func<ICameraProvider>>, ICameraProviderFactory
    {
        public ICameraProvider Create(string provider) => Count > 0
            ? this[provider]() : InitializeProviders()[provider]();

        private Dictionary<string, Func<ICameraProvider>> InitializeProviders()
        {
            return new Dictionary<string, Func<ICameraProvider>>
            {
                { "dlink", () => new DlinkProvider() }
            };
        }
    }
}
