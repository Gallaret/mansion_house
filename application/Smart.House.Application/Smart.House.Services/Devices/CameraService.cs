using Smart.House.Application.Services.Devices;
using Smart.House.Application.States;
using Smart.House.Camera.Repositories;
using Smart.House.Notification.Entities;
using System.Linq;

namespace Smart.House.Services.Devices
{
    using DomainService = Camera.Services.CameraService;
    using Camera = Camera.Entities.Camera;

    public class CameraService : ICameraService
    {
        private readonly ICameraRepository _repository;
        private readonly DomainService _service;

        public CameraService(ICameraRepository repository, DomainService service)
        {
            _repository = repository;
            _service = service;
        }

        public CameraState GetNewState(CameraState currentState)
        {
            var newState = new CameraState();
            var camera = _repository.Get(currentState.Identifier);
            
            if (camera.MotionDetectionEnabled)
            {
                camera.SetLastMotionFileName(currentState.CurrentMotionFileName);
                _service.UpdateMotionStatus(camera);
            }
            UpdateMotionState(currentState, newState, camera);

            newState.Notifications = camera.Notifications;
            return newState;
        }

        private void UpdateMotionState(CameraState currentState, CameraState newState, Camera camera)
        {
            newState.Identifier = currentState.Identifier;
            newState.IsMotionDetected = camera.Notifications.Any(
                n => n.Type == EventType.MotionDetected);
            newState.CurrentMotionFileName = camera.IsMotionDetected
                ? camera.Notifications.Single(n => n.Type == EventType.MotionDetected).Value
                : currentState.CurrentMotionFileName;
        }
    }
}
