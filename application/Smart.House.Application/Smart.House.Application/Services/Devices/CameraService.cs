using Smart.House.Application.Providers;
using Smart.House.Domain.Values;

namespace Smart.House.Application.Services.Devices
{
    using DomainService = Domain.Services.CameraService;

    public class CameraService
    {
        private readonly ICameraProviderFactory _providerFactory;
        private readonly IFtpClientService _ftpClient;
        private readonly DomainService _service;

        public CameraService(ICameraProviderFactory providerFactory, IFtpClientService ftpClient, DomainService service)
        {
            _providerFactory = providerFactory;
            _ftpClient = ftpClient;
            _service = service;
        }
        
        public void UpdateCameraState(CameraStatus status)
        {
            var provider = _providerFactory.Create(status.Identifier);

            var camera = provider.GetCameraInfo(status.Identifier);
            var catalog = provider.GetMotionDirectory(camera.FtpMotionPath);
            var files = _ftpClient.ScanFiles(catalog, camera.FtpCredentials); //credentials

            camera.DetectMotion(files, status.CurrentMotionFileName); //perform all operation relied by infra parameters

            _service.CheckCameraStatus(camera);

            status.IsMotionDetected = camera.IsMotionDetected;
            status.CurrentMotionFilePath = catalog;
            status.CurrentMotionFileName = camera.LastDetectedMotionFileName;
            status.Notifications = camera.Notifications;
        }
    }
}
