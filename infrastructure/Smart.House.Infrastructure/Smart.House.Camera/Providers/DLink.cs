using System;
using System.Linq;
using Smart.House.Application.Providers.Camera;
using System.IO;
using Smart.House.Application.Providers.Communication.Ftp;
using Smart.House.Application.Dtos.Camera;
using System.Threading.Tasks;
using Smart.House.Application.Dtos.Storage;
using Smart.House.Application.Dtos.Connection;

namespace Smart.House.Camera
{
    public class DLink : ICameraProvider
    {
        private const string MOTION_DIRECTORY = "/Motion";

        private readonly IFtpProvider _ftpProvider;

        public DLink(IFtpProvider ftpProvider)
        {
            _ftpProvider = ftpProvider;
        }

        public async Task<Motion> DetectMotion(MotionSettings settings, Credential credential)
        {
            var files = GetFiles(settings, credential);
            var lastFile = files.OrderByDescending(file => file.CreationTime)
                .FirstOrDefault();

            if (lastFile != null && !lastFile.FileName.Equals(settings.FileName))
            {
                return await Task.FromResult(
                    new Motion(true, lastFile.FileName));
            }

            return await Task.FromResult(
                    new Motion(false, settings.FileName));
        }

        private RemoteFile [] GetFiles(MotionSettings settings, Credential credential)
        {
            using (var connection = _ftpProvider.Connect(credential))
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
    }
}
