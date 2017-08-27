using Smart.House.Application.Commands;
using Smart.House.Application.Services.Devices;
using Smart.House.Application.States;
using Smart.House.Services.Handlers.Requests.Commands;
using System.Threading.Tasks;

namespace Smart.House.Services.Handlers.Requests
{
    public class UpdateCameraStatusRequestHandler : IRequestHandler<UpdateCameraStatusCommand, CameraState>
    {
        private readonly ICameraService _service;

        public UpdateCameraStatusRequestHandler(ICameraService service)
        {
            _service = service;
        }

        public async Task<CameraState> Handle(UpdateCameraStatusCommand command)
        {
            return await Task.Factory.StartNew(() =>
            {
               return _service.GetCameraState(command.CurrentState);
            });
        }
    }
}
