using Smart.House.Application.Commands;
using Smart.House.Application.Providers.Communication.Mail;
using Smart.House.Application.Repositories;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Services.Handlers.Requests.Commands;
using System.Threading.Tasks;

namespace Smart.House.Services.Handlers.Requests
{
    //public class SendEmailNotificationRequestHandler : IRequestHandler<EmailNotificationCommand>
    //{
    //    private readonly IEmailProviderFactory _providerFactory;
    //    private readonly IDeviceRepository<Notificator> _notificatorRepository;

    //    public SendEmailNotificationRequestHandler(IEmailProviderFactory providerFactory,
    //        IDeviceRepository<Notificator> notificatorRepository)
    //    {
    //        _providerFactory = providerFactory;
    //        _notificatorRepository = notificatorRepository;
    //    }

    //    public async Task Handle(EmailNotificationCommand command)
    //    {
    //        var notificator = await _notificatorRepository.GetAsync(command.Identifier);
    //        var provider = _providerFactory.Create(notificator.Provider);

    //        var email = new EmailData
    //        {
    //            Receiver = notificator.Receiver,
    //            Sender = notificator.RemoteAddress,
    //            Title = command.Type.ToString()
    //        };

    //        await provider.Send(email);
    //    }
    //}
}
