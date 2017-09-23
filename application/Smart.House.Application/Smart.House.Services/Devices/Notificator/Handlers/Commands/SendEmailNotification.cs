using Smart.House.Application.Commands;
using Smart.House.Application.Dtos.Notificator;
using Smart.House.Application.Providers.Notificator;
using Smart.House.Application.Repositories;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Notificator.Handlers.Commands
{
    using Notificator = Domain.Devices.Entities.Notificator;

    public class EmailNotificationCommand : IRequest
    {
        public string Identifier { get; set; }
        public string Email { get; set; }
        public EventType Type { get; set; }
        public string Value { get; set; }
    }

    public class SendEmailNotification : IRequestHandler<EmailNotificationCommand>
    {
        private readonly IMessageProviderFactory _messageProviderFactory;
        private readonly IDeviceRepository<Notificator> _notificatorRepository;

        public SendEmailNotification(IDeviceRepository<Notificator> notificatorRepository,
            IMessageProviderFactory messageProviderFactory)
        {
            _messageProviderFactory = messageProviderFactory;
            _notificatorRepository = notificatorRepository;
        }

        public async Task Handle(EmailNotificationCommand command)
        {
            var notificator = _notificatorRepository.Find(command.Identifier);

            if (notificator.EmailNotificationEnabled)
            {
                var provider = _messageProviderFactory.Create(notificator.Provider);

                var email = new EmailMessage(notificator, command.Type.ToString())
                {
                    Receiver = command.Email,
                    Content = "Test Message"
                };

                await provider.Send(email);
            }
        }
    }
}
