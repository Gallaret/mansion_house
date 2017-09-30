using Smart.House.Application.Domain.Devices.Ambilight.Providers;

namespace Smart.House.Application.Domain.Devices.Ambilight.Factories
{
    public interface IAmbilightProviderFactory
    {
        IAmbilightProvider Create(string provider);
    }
}
