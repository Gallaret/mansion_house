using Smart.House.Application.Providers.Camera;
using Smart.House.Application.Repositories;
using Smart.House.Application.Services;
using Smart.House.Application.Services.States;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Threading.Tasks;

namespace Smart.House.Services.State
{
    using DomainService = Domain.Devices.Services.CameraService;

    public class CameraService : IStateService<CameraState>
    {
        private readonly DomainService _service = new DomainService();

        private readonly ICameraRepository _cameraRepository;
        private readonly ICameraProviderFactory _cameraProviderFactory;
        private readonly INotificationRepository _notificationRepository;

        public CameraService(ICameraRepository cameraRepository,
            ICameraProviderFactory cameraProviderFactory,
            INotificationRepository notificationRepository)
        {          
            _cameraRepository = cameraRepository;
            _cameraProviderFactory = cameraProviderFactory;
            _notificationRepository = notificationRepository;
        }

        public async Task<CameraState> GetNewState(CameraState state)
        {        
            var camera = await _cameraRepository.GetAsync(state.Identifier);

            CheckMotionState(camera, state.CurrentMotionFileName);

            var newState = new CameraState(state);
            UpdateMotionState(newState, camera);

            return await Task.FromResult(newState);
        }

        private void CheckMotionState(Camera camera, string currentFileName)
        {
            if (camera.MotionDetectionEnabled)
            {
                camera.SetLastMotionFileName(currentFileName);

                var provider = _cameraProviderFactory.Create(camera.Provider);
                var motionDetected = provider.DetectMotion(camera, out string lastFileName);
                camera.SetMotionDetection(motionDetected);
                camera.SetLastMotionFileName(lastFileName);

                var lastNotification = _notificationRepository.TryGetLast(
                    lastFileName, EventType.MotionDetected);

                _service.SendMotionDetectedNotification(camera, lastNotification);
            }
        }

        private void UpdateMotionState(CameraState newState, Camera camera)
        {
            if (camera.IsMotionDetected)
            {
                newState.IsMotionDetected = true;
                newState.CurrentMotionFileName = camera.GetLastMotionFileName();
            }
        }
    }
}
