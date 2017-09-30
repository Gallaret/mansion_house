using Smart.House.Application.Commands;
using Smart.House.Application.Domain.Devices.Camera.Factories;
using Smart.House.Application.Domain.Devices.Camera.Repositories;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Camera.Handlers.Commands
{
    public class Recording : IRequest
    {
        public string Identifier { get; set; }

        public Recording(string identifier)
        {
            Identifier = identifier;
        }
    }

    public class StartRecording : IRequestHandler<Recording>
    {
        private readonly ICameraProviderFactory _factory;
        private readonly ICameraRepository _cameraRepository;

        public StartRecording(ICameraProviderFactory factory,
            ICameraRepository cameraRepository)
        {
            _factory = factory;
            _cameraRepository = cameraRepository;
        }

        public async Task Handle(Recording command)
        {
            var camera = await _cameraRepository.FindAsync(command.Identifier);

            var provider = _factory.Create(camera.Provider);

            provider.StartRecording();
        }
    }
}
