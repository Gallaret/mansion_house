using Smart.House.Application.Commands;
using Smart.House.Application.Providers.Ambilight;
using Smart.House.Services.Handlers.Requests.Commands;
using System.Threading.Tasks;

namespace Smart.House.Services.Handlers.Requests
{
    public class SendAmbilightNotificationRequestHandler : IRequestHandler<SendNotificationCommand>
    {
        private readonly IAmbilightProviderFactory _factory;

        public SendAmbilightNotificationRequestHandler(IAmbilightProviderFactory factory)
        {
            _factory = factory;
        }

        public async Task Handle(SendNotificationCommand command)
        {
            if (command.Notification.Sent) return;

            var provider = _factory.Create(command.Provider);
            await provider.RunAlarm();
        }
    }
}
