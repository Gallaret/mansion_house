using Smart.House.Application.Commands;
using Smart.House.Application.Providers.Communication.Mail;
using Smart.House.Application.Repositories;
using Smart.House.Application.Repositories.Users;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Notificator.Handlers.Commands
{
    using Notificator = Domain.Devices.Entities.Notificator;

    public class EmailNotificationCommand : IRequest
    {
        public string Identifier { get; set; }
        public EventType Type { get; set; }
        public string Value { get; set; }
    }

    public class SendEmailNotificationRequestHandler : IRequestHandler<EmailNotificationCommand>
    {
        private readonly IEmailProviderFactory _emailProviderFactory;
        private readonly IDeviceRepository<Notificator> _notificatorRepository;
        private readonly IUserRepository _userRepository;

        public SendEmailNotificationRequestHandler(IDeviceRepository<Notificator> notificatorRepository,
            IUserRepository userRepository, IEmailProviderFactory emailProviderFactory)
        {
            _emailProviderFactory = emailProviderFactory;
            _notificatorRepository = notificatorRepository;
            _userRepository = userRepository;
        }

        public async Task Handle(EmailNotificationCommand command)
        {
            var notificator = _notificatorRepository.Find(command.Identifier);
            var receiver = _userRepository.Find(notificator.Receiver);

            if (receiver != null)
            {
                //var provider = _emailProviderFactory.Create(notificator.Provider);
                //var email = notificator.GetEmail(command.Type.ToString(), receiver.Email);
                //email.Message = "Test Message";

                //await provider.Send(email);
            }
        }
    }
}
