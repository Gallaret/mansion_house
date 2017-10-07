using Smart.House.Domain.Devices.ValueTypes;

namespace Smart.House.Domain.Devices.Entities
{
    public class Camera : Device
    {
        private bool _isMotionDetected;

        public bool MotionDetectionEnabled { get; private set; }
        public StorageType StorageType { get; private set; }

        public Camera() { }

        internal Camera(string identifier, string provider) 
            : base(identifier, provider, DeviceType.Camera) {  }

        public void SetMotionStatus(bool detection)
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

        public void SetConnectionSettings(ConnectionSettings connection)
        {
            StorageType = connection.StorageType;
        }

        public bool IsMotionDetected => _isMotionDetected;
    }
}
