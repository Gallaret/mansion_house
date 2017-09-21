using System.Threading.Tasks;
using Smart.House.Application.Services.Devices;
using Smart.House.Interface;
using Smart.House.Interface.Devices;

namespace Smart.House.Grains.Devices.Camera
{
    public class CameraDispatcher : IDispatcher<CameraState>
    {
        private readonly ICameraService _cameraService;

        public CameraDispatcher(ICameraService cameraService)
        {
            _cameraService = cameraService;
        }

        public async Task<CameraState> Dispatch(CameraState state)
        {
            var motion = await _cameraService.MotionDetection(state.Identifier,
                state.CurrentMotionFileName);

            return new CameraState(state.Identifier)
            {
                CurrentMotionFileName = motion.FileName,
                IsMotionDetected = motion.IsDetected
            };
        }
    }
}
