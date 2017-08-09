using Smart.House.Domain.Entities;
using System.Collections.Generic;

namespace Smart.House.Domain.Values
{
    public struct CameraStatus
    {
        public string Identifier { get; set; }
        public string CurrentMotionFilePath { get; set; }
        public string CurrentMotionFileName { get; set; }
        public bool IsMotionDetected { get; set; }
        public IReadOnlyCollection<Notification> Notifications { get; set; }
    }
}
