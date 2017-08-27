using Smart.House.Application.Factories.Devices.Camera;
using Smart.House.Application.Services.Devices;
using Smart.House.Application.States;
using Smart.House.Camera.Repositories;
using Smart.House.Notification.Entities;
using Smart.House.Notification.Repositories;

namespace Smart.House.Services.Devices
{
    using DomainService = Camera.Services.CameraService;
    using Camera = Camera.Entities.Camera;

    public class CameraService : ICameraService
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

        public CameraState GetCameraState(CameraState currentState)
        {        
            var camera = _cameraRepository.Get(currentState.Identifier);

            CheckMotionState(camera, currentState.CurrentMotionFileName);

            var newState = new CameraState();
            UpdateMotionState(currentState, newState, camera);

            return newState;
        }

        private void CheckMotionState(Camera camera, string currentFileName)
        {
            if (camera.MotionDetectionEnabled)
            {
                camera.SetLastMotionFileName(currentFileName);

                var provider = _cameraProviderFactory.Create(camera.Producent);
                var motionDetected = provider.DetectMotion(camera, out string lastFileName);
                camera.SetMotionDetection(motionDetected, lastFileName);

                var lastNotification = _notificationRepository.TryGet(
                    lastFileName, EventType.MotionDetected);

                _service.SendMotionDetectedNotification(camera, lastNotification);
            }
        }

        private void UpdateMotionState(CameraState currentState, CameraState newState, Camera camera)
        {
            newState.Identifier = currentState.Identifier;
            newState.IsMotionDetected = camera.IsMotionDetected;
            newState.CurrentMotionFileName = camera.IsMotionDetected
                ? camera.GetLastMotionFileName()
                : currentState.CurrentMotionFileName;
        }
    }
}
