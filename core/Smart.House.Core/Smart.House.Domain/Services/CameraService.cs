using Smart.House.Domain.Entities;
using Smart.House.Domain.Entities.Camera;
using Smart.House.Domain.Specifications;

namespace Smart.House.Domain.Services
{
    public class CameraService
    {
        public void CheckCameraStatus(Camera camera)
        {
            Notification notify = new Notification() { Type = EventType.MotionDetected, Unchecked = true, Value = "" };

            var specification = new CameraSpecification(camera);

            if (specification.IsNotificable(notify))
            {
                //create new notification from factory
                camera.AddNotification(notify);
            }
        }
    }
}
