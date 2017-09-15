using System;
using System.Linq;
using Smart.House.Application.Providers.Camera;
using System.IO;

namespace Smart.House.Camera
{
    using Camera = Domain.Devices.Entities.Camera;

    public class DlinkProvider : ICameraProvider
    {
        private const string MOTION_DIRECTORY = "/Motion";

        public string MotionDirectory => MOTION_DIRECTORY;

        public bool DetectMotion(Camera camera, FileInfo [] files, out string lastMotionFileName)
        {
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

        public string GetMotionFilePath()
        {
            var now = DateTime.Now;
            var catalog = now.ToString("yyyyMMdd");
            var subcatalog = new TimeSpan(now.Hour, now.Minute,
                now.Second).ToString("hh");

            return $"{MOTION_DIRECTORY}/{catalog}/{subcatalog}";
        }
    }
}
