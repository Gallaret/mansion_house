namespace Smart.House.Application.Providers.Notificator
{
    public interface IMessageProviderFactory
    {
        IMessageProvider Create(string provider);
    }
}
