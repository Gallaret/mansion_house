using Smart.House.Application.Domain.Devices.Notificator.Providers;

namespace Smart.House.Application.Domain.Devices.Notificator.Factories
{
    public interface IMessageProviderFactory
    {
        IMessageProvider Create(string provider);
    }
}
