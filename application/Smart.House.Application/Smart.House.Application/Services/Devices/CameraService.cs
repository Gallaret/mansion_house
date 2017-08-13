using Smart.House.Application.Providers;
using Smart.House.Domain.Entities.Camera;
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
            var provider = _providerFactory.Create("dlink"); //move to state
            var camera = provider.GetCameraInfo(status.Identifier);
            var cameraMotionPath = provider.GetMotionDirectory("Motion"); //camera.FtpMotionPath

            CheckMotionStatus(camera, cameraMotionPath, status.CurrentMotionFileName);

            _service.CheckCameraStatus(camera);

            UpdateMotionStatus(status, camera, cameraMotionPath);

            status.Notifications = camera.Notifications;
        }

        private void CheckMotionStatus(Camera camera, string currentDirectory, string currentFileName)
        {
            var ftpCredentials = CreateCredentials(camera);
            var files = _ftpClient.ScanFiles(currentDirectory, ftpCredentials); //credentials

            camera.DetectMotion(files, currentFileName); //perform all operation relied by infra parameters
        }

        private void UpdateMotionStatus(CameraStatus status, Camera camera, string cameraMotionPath)
        {
            status.IsMotionDetected = camera.IsMotionDetected;
            status.CurrentMotionFileName = camera.LastDetectedMotionFileName;
            status.CurrentMotionFilePath = cameraMotionPath;
        }

        private FtpCredentials CreateCredentials(Camera camera)
        {
            return new FtpCredentials
            {
                Login =  "FTPCamera", //camera.FtpLogin,
                Password = "DLink942", //camera.FtpMotionPath,
                Uri = "192.168.0.24" //camera.Uri
            };
        }
    }
}
