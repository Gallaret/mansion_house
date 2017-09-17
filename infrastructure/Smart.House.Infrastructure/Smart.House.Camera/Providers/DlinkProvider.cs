using System;
using System.Linq;
using Smart.House.Application.Providers.Camera;
using System.IO;
using Smart.House.Application.Providers.Communication.Ftp;

namespace Smart.House.Camera
{
    using Camera = Domain.Devices.Entities.Camera;

    public class DlinkProvider : ICameraProvider
    {
        private const string MOTION_DIRECTORY = "/Motion";

        private readonly IFtpProvider _ftpProvider;

        public DlinkProvider(IFtpProvider ftpProvider)
        {
            _ftpProvider = ftpProvider;
        }

        public bool DetectMotion(Camera camera, out string lastMotionFileName)
        {
            var files = GetFiles(camera);
            var lastFile = files.OrderByDescending(file => file.CreationTime).FirstOrDefault();

            if (lastFile != null)
            {
                if (!lastFile.Name.Equals(camera.GetCurrentMotionFileName()))
                {
                    lastMotionFileName = lastFile.Name;
                }
                else
                {
                    lastMotionFileName = camera.GetCurrentMotionFileName();
                }

                return true;
            }
            else if (!string.IsNullOrEmpty(camera.GetCurrentMotionFileName()))
            {
                lastMotionFileName = camera.GetCurrentMotionFileName();
                return true;
            }
            else
            {
                lastMotionFileName = null;
                return false;
            }
        }

        private FileInfo[] GetFiles(Camera camera)
        {
            var credentials = new RemoteCredentials
            {
                Address = camera.RemoteAddress,
                Login = camera.RemoteLogin,
                Password = camera.RemotePassword
            };

            using (var connection = _ftpProvider.Connect(credentials))
            {
                if (!connection.DirectoryExists(MOTION_DIRECTORY))
                    throw new DirectoryNotFoundException(camera.RemotePath);

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
    }
}
