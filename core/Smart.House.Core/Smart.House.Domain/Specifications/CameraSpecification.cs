using Smart.House.Domain.Entities;
using Smart.House.Domain.Entities.Camera;

namespace Smart.House.Domain.Specifications
{
    public class CameraSpecification
    {
        private readonly Camera _camera;

        public CameraSpecification(Camera camera)
        {
            _camera = camera;
        }

        public bool IsNotificable(Notification notification)
        {
            switch (notification.Type)
            {
                case EventType.MotionDetected:
                    {
                        if (_camera.IsMotionDetected)
                        {
                            var same = notification.Value == _camera.LastDetectedMotionFileName;

                            if (same && !notification.Unchecked)
                            {
                                _camera.ClearMotionDetection();
                            }

                            return (_camera.IsMotionDetected && !same)
                                || (_camera.IsMotionDetected && notification.Unchecked);
                        }

                        break;
                    }
            }

            return false;
        }
    }
}
