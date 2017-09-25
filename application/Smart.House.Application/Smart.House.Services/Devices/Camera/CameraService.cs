using Smart.House.Application.Dtos.Camera;
using Smart.House.Application.Dtos.Connection;
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

        public async Task<Motion> MotionDetection(string identifier, string lastFileName)
        {
            var camera = await _cameraRepository.GetAsync(identifier);

            if (!camera.MotionDetectionEnabled)
                return new Motion(false, lastFileName);

            var result = await DetectMotion(camera, lastFileName);
            camera.SetMotionStatus(result.IsDetected);

            var motionDetected = camera.IsMotionDetected
                && _domainService.SendMotionDetectedNotification(camera, result.FileName);

            return new Motion(motionDetected, result.FileName);
        }

        private async Task<Motion> DetectMotion(Camera camera, string fileName)
        {
            var settings = new MotionSettings(camera.RemotePath, fileName);
            var credential = new Credential(camera);

            var provider = _cameraProviderFactory.Create(camera.Provider);
            return await provider.DetectMotion(settings, credential);
        }
    }
}
