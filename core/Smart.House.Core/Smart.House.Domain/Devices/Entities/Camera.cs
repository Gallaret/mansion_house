namespace Smart.House.Domain.Devices.Entities
{
    public class Camera : Device
    {
        private bool _isMotionDetected;
        private string _lastDetectedMotionFileName;

        public bool MotionDetectionEnabled { get; private set; }

        public Camera() { }

        internal Camera(string identifier, string provider) 
            : base(identifier, provider, DeviceType.Camera) {  }

        public void SetMotionDetection(bool detection)
        {
            _isMotionDetected = detection;
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
    }
}
