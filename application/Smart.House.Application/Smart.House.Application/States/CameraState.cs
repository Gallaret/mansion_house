using Smart.House.Domain.Entities;
using System.Collections.Generic;

namespace Smart.House.Application.States
{
    public class CameraState
    {
        public string Identifier { get; set; }
        public string CurrentMotionFileName { get; set; }
        public bool IsMotionDetected { get; set; }
        public IReadOnlyCollection<Notification.Entities.Notification> Notifications { get; set; }
    }
}
