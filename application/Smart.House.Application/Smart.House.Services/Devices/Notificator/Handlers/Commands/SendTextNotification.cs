using Smart.House.Application.Commands;
using Smart.House.Application.Domain.Devices;
using Smart.House.Application.Domain.Devices.Notificator.Dtos;
using Smart.House.Application.Domain.Devices.Notificator.Factories;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Notificator.Handlers.Commands
{
    using Notificator = Domain.Devices.Entities.Notificator;

    public class TextNotificationCommand : IRequest
    {
        public string Identifier { get; set; }
        public string Mobile { get; set; }
        public string Title { get; set; }
        public string Value { get; set; }
    }

    public class SendTextNotification : IRequestHandler<TextNotificationCommand>
    {
        private readonly IMessageProviderFactory _messageProviderFactory;
        private readonly IDeviceRepository<Notificator> _notificatorRepository;

        public SendTextNotification(IDeviceRepository<Notificator> notificatorRepository,
            IMessageProviderFactory messageProviderFactory)
        {
            _messageProviderFactory = messageProviderFactory;
            _notificatorRepository = notificatorRepository;
        }

        public async Task Handle(TextNotificationCommand command)
        {
            var notificator = _notificatorRepository.Find(command.Identifier);
            
            if (notificator.SmsNotificationEnabled)
            {
                var provider = _messageProviderFactory.Create(notificator.MobileProvider);

                var email = new TextMessage(notificator, command.Title)
                {
                    Content = "Test Message",
                    Receiver = command.Mobile
                };

                await provider.Send(email);
            }          
        }
    }
}
