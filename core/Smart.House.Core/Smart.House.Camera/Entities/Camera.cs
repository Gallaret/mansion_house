using Smart.House.Domain.Entities;

namespace Smart.House.Camera.Entities
{
    public class Camera : Device
    {
        private bool _isMotionDetected;
        private string _lastDetectedMotionFileName;

        public string FtpMotionPath { get; private set; }
        public bool MotionDetectionEnabled { get; private set; }
        public string FtpLogin { get; private set; }
        public string FtpPassword { get; private set; }

        public Camera() { }

        internal Camera(int id, string producent) 
            : base(id, producent, DeviceType.Camera) {  }

        public void SetMotionDetection(bool detection, string lastFileName)
        {
            _isMotionDetected = detection;
            _lastDetectedMotionFileName = lastFileName;
        }

        public void EnableMotionDetection()
        {
            MotionDetectionEnabled = true;
        }

        public void DisableMotionDetection()
        {
            MotionDetectionEnabled = false;
            AmbientNotificationEnabled = false;
            SoundNotificationEnabled = false;
        }

        public void ClearMotionDetection()
        {
            _lastDetectedMotionFileName = null;
            _isMotionDetected = false;
        }

        public string GetLastMotionFileName()
        {
            return _lastDetectedMotionFileName;
        }

        public void SetLastMotionFileName(string fileName)
        {
            _lastDetectedMotionFileName = fileName;
        }

        public bool IsMotionDetected => _isMotionDetected;
        public override bool IsActive => true;
    }
}
