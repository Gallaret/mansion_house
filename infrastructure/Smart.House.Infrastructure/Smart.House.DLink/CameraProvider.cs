using System;
using System.Linq;
using Smart.House.Application.Providers.Camera;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Application.Providers.Ftp;

namespace Smart.House.DLink
{
    public class CameraProvider : ICameraProvider
    {
        private const string MOTION_DIRECTORY = "/Motion";

        private readonly IFtpProvider _ftpClient;
        public CameraProvider(IFtpProvider ftpClient)
        {
            _ftpClient = ftpClient;
        }

        public bool DetectMotion(Camera camera, out string lastMotionFileName)
        {
            var credentials = CreateCredentials(camera);

            using (var client = _ftpClient.Connect(credentials))
            {
                var directory = CreateMotionDirectory(camera.RemotePath, client);
                var files = client.ScanFiles(directory);
                var lastFile = files.OrderByDescending(file => file.CreationTime).FirstOrDefault();

                if (lastFile != null)
                {
                    if (!lastFile.Name.Equals(camera.GetLastMotionFileName()))
                    {
                        lastMotionFileName = lastFile.Name;
                    }
                    else
                    {
                        lastMotionFileName = camera.GetLastMotionFileName();
                    }

                    return true;
                }
                else if (!string.IsNullOrEmpty(camera.GetLastMotionFileName()))
                {
                    lastMotionFileName = camera.GetLastMotionFileName();
                    return true;
                }
                else
                {
                    lastMotionFileName = null;
                    return false;
                }
            }
        }

        private static RemoteCredentials CreateCredentials(Camera camera)
        {
            return new RemoteCredentials
            {
                Login = camera.RemoteLogin,
                Password = camera.RemotePassword,
                Address = camera.RemoteAddress
            };
        }

        private string CreateMotionDirectory(string ftpPath, IFtpProvider client)
        {
            if (!client.DirectoryExists(MOTION_DIRECTORY))
                throw new ArgumentException($"{MOTION_DIRECTORY} catalog not exists in {ftpPath}");

            var now = DateTime.Now;
            var catalog = now.ToString("yyyyMMdd");
            var subcatalog = new TimeSpan(now.Hour, now.Minute, 
                now.Second).ToString("hh");

            return $"{MOTION_DIRECTORY}/{catalog}/{subcatalog}";
        }
    }
}
