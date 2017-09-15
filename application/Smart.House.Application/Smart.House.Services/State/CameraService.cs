using Smart.House.Application.Providers.Camera;
using Smart.House.Application.Providers.Communication.Ftp;
using Smart.House.Application.Repositories;
using Smart.House.Application.Services;
using Smart.House.Application.Services.States;
using Smart.House.Domain.Devices.Entities;
using System.Threading.Tasks;

namespace Smart.House.Services.State
{
    using DomainService = Domain.Devices.Services.CameraService;

    public class CameraService : IStateService<CameraState>
    {
        private readonly DomainService _service = new DomainService();

        private readonly ICameraRepository _cameraRepository;
        private readonly ICameraProviderFactory _cameraProviderFactory;
        private readonly IFtpProvider _ftpProvider;

        public CameraService(ICameraRepository cameraRepository,
            ICameraProviderFactory cameraProviderFactory,
            IFtpProvider ftpProvider)
        {          
            _cameraRepository = cameraRepository;
            _cameraProviderFactory = cameraProviderFactory;
            _ftpProvider = ftpProvider;
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
            if (!camera.MotionDetectionEnabled) return;

            camera.SetLastMotionFileName(currentFileName);

            DetectMotion(camera);

            if (camera.IsMotionDetected)
            {
                _service.SendMotionDetectedNotification(camera);
            }
        }

        private void UpdateMotionState(CameraState newState, Camera camera)
        {
            if (!camera.IsMotionDetected) return;

            newState.IsMotionDetected = true;
            newState.CurrentMotionFileName = camera.GetLastMotionFileName();
        }

        private void DetectMotion(Camera camera)
        {
            var credentials = new RemoteCredentials
            {
                Address = camera.RemoteAddress,
                Login = camera.RemoteLogin,
                Password = camera.RemotePassword
            };

            using (var connection = _ftpProvider.Connect(credentials))
            {
                var provider = _cameraProviderFactory.Create(camera.Provider);

                if (connection.DirectoryExists(provider.MotionDirectory))
                {
                    var motionPath = provider.GetMotionFilePath();
                    var files = connection.ScanFiles(motionPath);

                    var result = provider.DetectMotion(camera, files, out string lastFileName);

                    camera.SetMotionDetection(result);
                    camera.SetLastMotionFileName(lastFileName);
                }
            }
        }
    }
}
