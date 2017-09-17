using Orleans;
using Smart.House.Interface.Services.States;
using Smart.House.Interface;
using System.Threading.Tasks;

namespace Smart.House.Grains
{
    public class Camera : Grain<CameraState>, ICamera
    {
        public async Task<CameraState> GetCameraState()
        {
            State.IsMotionDetected = !State.IsMotionDetected;
            State.CurrentMotionFileName = "dupa";

            return await Task.FromResult(State);
        }
    }
}
