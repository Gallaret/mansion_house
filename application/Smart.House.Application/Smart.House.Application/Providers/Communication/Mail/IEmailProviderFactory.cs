namespace Smart.House.Application.Providers.Communication.Mail
{
    public interface IEmailProviderFactory
    {
        IEmailProvider Create(string provider);
    }
}
