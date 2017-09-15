using Smart.House.Application.Commands;
using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Providers.Communication.Ftp;
using Smart.House.Application.Providers.Ssh;
using Smart.House.Application.Repositories;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Services.Handlers.Requests.Commands;
using System.Threading.Tasks;

namespace Smart.House.Services.Handlers.Requests
{
    public class PerformAmbilightAlarmRequestHandler : IRequestHandler<AmbilightAlarmCommand>
    {
        private readonly IAmbilightProviderFactory _factory;
        private readonly IDeviceRepository<Device> _deviceRepository;
        private readonly ISshProvider _sshProvider;

        public PerformAmbilightAlarmRequestHandler(IAmbilightProviderFactory factory,
            IDeviceRepository<Device> deviceRepository,
            ISshProvider sshProvider)
        {
            _factory = factory;
            _deviceRepository = deviceRepository;
            _sshProvider = sshProvider;
        }

        public async Task Handle(AmbilightAlarmCommand command)
        {
            var device = await _deviceRepository.GetAsync(command.Identifier);

            if (device.AmbientNotificationEnabled)
            {
                var provider = _factory.Create(device.Provider);

                var credentials = new RemoteCredentials
                {
                    Address = device.RemoteAddress,
                    Login = device.RemoteLogin,
                    Password = device.RemotePassword
                };

                using (var client = _sshProvider.Connect(credentials))
                {
                    client.ExecuteCommand(provider.StartAlarmCommand);

                    await Task.Delay(5000);

                    client.ExecuteCommand(provider.StopAlarmCommand);
                }
            }
        }
    }
}
