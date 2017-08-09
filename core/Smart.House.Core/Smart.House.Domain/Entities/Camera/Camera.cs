using Smart.House.Domain.Values;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Smart.House.Domain.Entities.Camera
{
    public class Camera : Device
    {
        private List<Notification> _notifications = new List<Notification>();

        private bool _isMotionDetected;
        private string _lastDetectedMotionFileName;

        public string FtpMotionPath { get; private set; }
        public bool AmbientNotification { get; private set; }
        public bool SoundNotification { get; private set; }
        public string FtpLogin { get; private set; }
        public string FtpPassword { get; private set; }

        public Credential FtpCredentials
        {
            get
            {
                return new Credential
                {
                    Login = FtpLogin,
                    Password = FtpPassword
                };
            } 
        } 

        public Camera(string identifier): base(DeviceType.Camera, identifier) { }

        public Camera(CameraSettings settings) 
            : base(DeviceType.Camera, settings.Identifier)
        {
            FtpMotionPath = settings.MotionDirectory;
        }

        public void DetectMotion(FileInfo [] files, string lastMotionFileName)
        {
            var lastFile = files.OrderByDescending(file => file.CreationTime).SingleOrDefault();

            if (lastFile != null)
            {
                if (!lastFile.Name.Equals(lastMotionFileName))
                {
                    _lastDetectedMotionFileName = lastFile.Name;
                }
                else
                {
                    _lastDetectedMotionFileName = lastMotionFileName;
                }
                _isMotionDetected = true;
            }
            else if (!string.IsNullOrEmpty(lastMotionFileName))
            {
                _lastDetectedMotionFileName = lastMotionFileName;
                _isMotionDetected = true;
            }
            else
            {
                _isMotionDetected = false;
            }
        }

        public void AddNotification(Notification notification)
        {
            _notifications.Add(notification);
        }

        public void ClearMotionDetection()
        {
            _lastDetectedMotionFileName = null;
            _isMotionDetected = false;
        }

        public string LastDetectedMotionFileName => _lastDetectedMotionFileName;
        public bool IsMotionDetected => _isMotionDetected;
        public override string DeviceIdentifier => Identifier;
        public override bool IsActive => true;
        public IReadOnlyCollection<Notification> Notifications => _notifications;
    }
}
