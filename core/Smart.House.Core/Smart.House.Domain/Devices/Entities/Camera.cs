namespace Smart.House.Domain.Devices.Entities
{
    public class Camera : Device
    {
        private bool _isMotionDetected;
        private string _currentMotionFileName;

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
            _currentMotionFileName = null;
            _isMotionDetected = false;
        }

        public string GetCurrentMotionFileName()
        {
            return _currentMotionFileName;
        }

        public void SetCurrentMotionFileName(string fileName)
        {
            _currentMotionFileName = fileName;
        }

        public bool IsMotionDetected => _isMotionDetected;
    }
}
