using Smart.House.Application.Dtos.Notificator;
using System.Threading.Tasks;
using Smart.House.Application.Providers.Notificator;

namespace Smart.House.Messager.Providers.Text
{
    public class PlusGSM : IMessageProvider
    {
        private readonly IMessageProviderFactory _messageProviderFactory;
        const string provider = "text.plusgsm.pl";

        public PlusGSM(IMessageProviderFactory messageProviderFactory)
        {
            _messageProviderFactory = messageProviderFactory;
        }

        public async Task Send(Message message)
        {
            var email = message.As<EmailMessage>();
            email.Receiver = string.Concat(email.Receiver, "@", provider);

            var emailProvider = _messageProviderFactory.Create(email.Provider);

            await emailProvider.Send(email);
        }
    }
}
