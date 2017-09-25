using Smart.House.Application.Commands;
using Smart.House.Application.Dtos.Connection;
using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Repositories;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Ambilight.Handlers.Commands
{
    using Ambilight = Domain.Devices.Entities.Ambilight;

    public class AmbilightAlarmCommand : IRequest
    {
        public string Identifier { get; set; }
        public string Value { get; set; }
    }

    public class PerformAmbilightAlarmRequestHandler : IRequestHandler<AmbilightAlarmCommand>
    {
        private readonly IAmbilightProviderFactory _factory;
        private readonly IDeviceRepository<Ambilight> _ambilightRepository;

        public PerformAmbilightAlarmRequestHandler(IAmbilightProviderFactory factory,
            IDeviceRepository<Ambilight> ambilightRepository)
        {
            _factory = factory;
            _ambilightRepository = ambilightRepository;
        }

        public async Task Handle(AmbilightAlarmCommand command)
        {
            var device = await _ambilightRepository.FindAsync(command.Identifier);

            if (device.AmbientNotificationEnabled)
            {
                var provider = _factory.Create(device.Provider);

                var credential = new Credential(device);

                await provider.RunAlarm(credential);
            }
        }
    }
}
