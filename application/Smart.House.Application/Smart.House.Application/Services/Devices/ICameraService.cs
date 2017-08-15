using Smart.House.Application.States;

namespace Smart.House.Application.Services.Devices
{
    public interface ICameraService
    {
        CameraState GetNewState(CameraState currentState);
    }
}
