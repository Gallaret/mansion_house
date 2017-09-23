using System;
using System.Linq;
using Smart.House.Application.Providers.Camera;
using System.IO;
using Smart.House.Application.Providers.Communication.Ftp;
using Smart.House.Application.Dtos.Camera;
using System.Threading.Tasks;

namespace Smart.House.Camera
{
    public class DlinkProvider : ICameraProvider
    {
        private const string MOTION_DIRECTORY = "/Motion";

        private readonly IFtpProvider _ftpProvider;

        public DlinkProvider(IFtpProvider ftpProvider)
        {
            _ftpProvider = ftpProvider;
        }

        public async Task<Motion> DetectMotion(MotionSettings settings)
        {
            var files = GetFiles(settings);
            var lastFile = files.OrderByDescending(file => file.CreationTime)
                .FirstOrDefault();

            var fileName = settings.FileName;

            if (lastFile != null && !lastFile.Name.Equals(fileName))
            {
                return await Task.FromResult(
                    new Motion(true, lastFile.Name));
            }

            return await Task.FromResult(
                    new Motion(false, fileName));
        }

        private FileInfo[] GetFiles(MotionSettings settings)
        {
            var credentials = Create(settings);

            using (var connection = _ftpProvider.Connect(credentials))
            {
                if (!connection.DirectoryExists(MOTION_DIRECTORY))
                    throw new DirectoryNotFoundException(settings.Path);

                var motionPath = CreateMotionFilePath(MOTION_DIRECTORY);

                return connection.ScanFiles(motionPath);
            }
        }

        private static string CreateMotionFilePath(string motionPath)
        {
            var now = DateTime.Now;
            var catalog = now.ToString("yyyyMMdd");
            var subcatalog = new TimeSpan(now.Hour, now.Minute,
                now.Second).ToString("hh");

            return $"{motionPath}/{catalog}/{subcatalog}";
        }

        private static RemoteCredentials Create(MotionSettings settings)
        {
            return new RemoteCredentials
            {
                Address = settings.Address,
                Login = settings.Login,
                Password = settings.Password
            };
        }
    }
}
