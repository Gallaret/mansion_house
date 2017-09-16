using Smart.House.Application.Commands;
using Smart.House.Application.Providers.Communication.Mail;
using Smart.House.Application.Repositories;
using Smart.House.Application.Repositories.Users;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Services.Handlers.Requests.Commands;
using System.Threading.Tasks;

namespace Smart.House.Services.Handlers.Requests
{
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
            var notificator = await _notificatorRepository.FindAsync(command.Identifier);
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
