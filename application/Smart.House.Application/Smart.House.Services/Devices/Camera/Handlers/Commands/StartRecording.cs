using Smart.House.Application.Commands;
using Smart.House.Application.Domain.Devices.Camera.Dtos;
using Smart.House.Application.Domain.Devices.Camera.Factories;
using Smart.House.Application.Domain.Devices.Camera.Repositories;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Camera.Handlers.Commands
{
    public class Start : IRequest
    {
        public string Identifier { get; set; }

        public Start(string identifier)
        {
            Identifier = identifier;
        }
    }

    public class StartRecording : IRequestHandler<Start>
    {
        private readonly ICameraProviderFactory _factory;
        private readonly ICameraRepository _cameraRepository;

        public StartRecording(ICameraProviderFactory factory,
            ICameraRepository cameraRepository)
        {
            _factory = factory;
            _cameraRepository = cameraRepository;
        }

        public async Task Handle(Start command)
        {
            var camera = await _cameraRepository.FindAsync(command.Identifier);

            var provider = _factory.Create(camera.Provider);

            var stream = new RecordingStream(camera, "file");

            await provider.StartRecording(stream);
        }
    }
}
