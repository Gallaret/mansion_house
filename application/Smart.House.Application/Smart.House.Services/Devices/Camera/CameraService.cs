using Smart.House.Application.Domain.Devices.Camera.Dtos;
using Smart.House.Application.Domain.Devices.Camera.Factories;
using Smart.House.Application.Domain.Devices.Camera.Repositories;
using Smart.House.Application.Domain.Devices.Camera.Services;
using Smart.House.Application.Domain.Devices.Storekeeper.Dtos;
using Smart.House.Application.Domain.Devices.Storekeeper.Repositories;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Camera
{
    using DomainService = Domain.Devices.Services.CameraService;
    using Camera = Domain.Devices.Entities.Camera;

    public class CameraService : ICameraService
    {
        private readonly DomainService _domainService = new DomainService();

        private readonly ICameraRepository _cameraRepository;
        private readonly IStorekeeperRepository _storekeeperRepository;
        private readonly ICameraProviderFactory _cameraProviderFactory;

        public CameraService(ICameraRepository cameraRepository,
            IStorekeeperRepository storekeeperRepository,
            ICameraProviderFactory cameraProviderFactory)
        {
            _cameraRepository = cameraRepository;
            _storekeeperRepository = storekeeperRepository;
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
            var storekeeper = await _storekeeperRepository.GetByProvider("ftp");
            var provider = _cameraProviderFactory.Create(camera.Provider);

            var storage = new Storage(storekeeper, fileName);

            return await provider.DetectMotion(storage);
        }
    }
}
