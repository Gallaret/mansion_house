using Smart.House.Application.Commands;
using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Providers.Ftp;
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

        public PerformAmbilightAlarmRequestHandler(IAmbilightProviderFactory factory,
            IDeviceRepository<Device> deviceRepository)
        {
            _factory = factory;
            _deviceRepository = deviceRepository;
        }

        public async Task Handle(AmbilightAlarmCommand command)
        {
            var device = await _deviceRepository.GetAsync(command.Identifier);

            if (device.AmbientNotificationEnabled)
            {
                var provider = _factory.Create(device.Provider);

                await provider.RunAlarm(new RemoteCredentials
                {
                    Address = device.RemoteAddress,
                    Login = device.RemoteLogin,
                    Password = device.RemotePassword
                });
            }
        }
    }
}
