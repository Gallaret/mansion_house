using Smart.House.Application.Dtos.Camera;
using Smart.House.Application.Providers.Camera;
using Smart.House.Application.Repositories;
using Smart.House.Application.Services.Devices;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Camera
{
    using DomainService = Domain.Devices.Services.CameraService;
    using Camera = Domain.Devices.Entities.Camera;

    public class CameraService : ICameraService
    {
        private readonly DomainService _domainService = new DomainService();

        private readonly ICameraRepository _cameraRepository;
        private readonly ICameraProviderFactory _cameraProviderFactory;

        public CameraService(ICameraRepository cameraRepository,
            ICameraProviderFactory cameraProviderFactory)
        {
            _cameraRepository = cameraRepository;
            _cameraProviderFactory = cameraProviderFactory;
        }

        public async Task<Motion> MotionDetection(string identifier, string lastDetectedFileName)
        {
            var camera = await _cameraRepository.GetAsync(identifier);

            DetectMotion(camera, lastDetectedFileName);

            var motionDetected = camera.IsMotionDetected
                && _domainService.SendMotionDetectedNotification(camera);
            var fileName = camera.GetCurrentMotionFileName();

            return new Motion(motionDetected, fileName);
        }

        private void DetectMotion(Camera camera, string currentFileName)
        {
            if (!camera.MotionDetectionEnabled) return;

            camera.SetCurrentMotionFileName(currentFileName);

            var provider = _cameraProviderFactory.Create(camera.Provider);

            provider.DetectMotion(camera);
        }
    }
}
