using Smart.House.Application.Domain.Devices.Camera.Providers;

namespace Smart.House.Application.Domain.Devices.Camera.Factories
{
    public interface IRecordingProviderFactory
    {
        IRecordingProvider Create(string name);
    }
}
