using Smart.House.Application.Commands;
using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Repositories;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Ambilight.Handlers.Commands
{
    using Ambilight = Domain.Devices.Entities.Ambilight;

    public class AmbilightAlarmCommand : IRequest
    {
        public string Identifier { get; set; }
        public EventType EventType { get; set; }
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
            var device = _ambilightRepository.Find(command.Identifier);

            if (device.AmbientNotificationEnabled)
            {
                var provider = _factory.Create(device.Provider);
                await provider.RunAlarm(device);
            }
        }
    }
}
