using System;
using Smart.House.Domain.Infrastructure;
using System.Linq;
using Smart.House.Application.Providers.Camera;
using Smart.House.Domain.Devices.Entities;

namespace Smart.House.DLink
{
    public class CameraProvider : ICameraProvider
    {
        private readonly IFtpClientService _ftpClient;
        public CameraProvider(IFtpClientService ftpClient)
        {
            _ftpClient = ftpClient;
        }

        public bool DetectMotion(Camera camera, out string lastMotionFileName)
        {
            var directory = GetMotionDirectory(camera.FtpMotionPath);
            var files =_ftpClient.ScanFiles(directory, new FtpCredentials
            {
                Login = camera.FtpLogin,
                Password = camera.FtpPassword,
                Uri = "192.168.0.24"
            });

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

        private string GetMotionDirectory(string ftpPath)
        {
            var now = DateTime.Now;
            var catalog = now.ToString("yyyyMMdd");
            var subcatalog = new TimeSpan(now.Hour, now.Minute, now.Second).ToString("hh");

            return $"{ftpPath}/{catalog}/{subcatalog}";
        }
    }
}
