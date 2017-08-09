using Smart.House.Application.Providers;
using Smart.House.Application.Services;
using Smart.House.Commands.Commands;
using System;
using System.Threading.Tasks;

namespace Smart.House.Commands.Handlers
{
    public class FetchCameraStatusHandler : IAsyncCommandHandler<FetchCameraStatusCommand>
    {
        private readonly IFtpClientService _ftpClientService;

        public FetchCameraStatusHandler(IFtpClientService ftpClientService, ICameraProvider provider)
        {
            _ftpClientService = ftpClientService;
        }

        public async Task Execute(FetchCameraStatusCommand command)
        {
            //var camera = new Camera(settings);

            //if (camera.IsActive)
            //{
            //    var path = camera.GetMotionPath();
            //    var files = _ftpClientService.ScanFiles(path);

            //    bool isMotionDetected = camera.DetectMotion(files); //detect motion and set last motion record file

            //}



            await Task.FromException(new NotImplementedException());
        }
    }
}
