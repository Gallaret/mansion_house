using Smart.House.Application.Commands;
using Smart.House.Application.Domain.Devices;
using Smart.House.Application.Domain.Devices.Notificator.Dtos;
using Smart.House.Application.Domain.Devices.Notificator.Factories;
using System.Collections.Generic;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Notificator.Handlers.Commands
{
    using Notificator = Domain.Devices.Entities.Notificator;

    public class EmailNotificationCommand : IRequest
    {
        public string Identifier { get; set; }
        public string Email { get; set; }
        public string Title { get; set; }
        public string Value { get; set; }
        public List<Attachment> Attachments { get; set; }
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

                var email = new EmailMessage(notificator, command.Title)
                {
                    Receiver = command.Email,
                    Content = "Test Message",
                    Attachments = command.Attachments
                };

                await provider.Send(email);
            }
        }
    }
}
