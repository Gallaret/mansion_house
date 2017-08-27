using Smart.House.Application.Commands;
using Smart.House.Application.States;

namespace Smart.House.Services.Handlers.Requests.Commands
{
    public class UpdateCameraStatusCommand : IRequest
    {
        public UpdateCameraStatusCommand(string id)
        {
            Id = id;
            Device = "camera";
        }

        public string Id { get; private set; }
        public string Device { get; private set; }
        public CameraState CurrentState { get; private set; }

        public void SetCurrentState(CameraState state)
        {
            CurrentState = state;
        }
    }
}
