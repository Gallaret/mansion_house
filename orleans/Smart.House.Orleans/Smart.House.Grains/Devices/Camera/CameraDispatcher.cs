using System.Threading.Tasks;
using Smart.House.Interface;
using Smart.House.Interface.Devices;
using Smart.House.Application.Domain.Devices.Camera.Services;

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

            var recording = await _cameraService.Recording(state.Identifier);

            return new CameraState(state.Identifier)
            {
                CurrentMotionFileName = motion.FileName,
                IsMotionDetected = motion.IsDetected,
                IsRecording = recording
            };
        }
    }
}
