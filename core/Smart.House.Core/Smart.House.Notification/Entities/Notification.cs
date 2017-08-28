using System;

namespace Smart.House.Notification.Entities
{
    public enum EventType
    {
        MotionDetected = 0,
    }

    public class Notification
    {
        public string Value { get; set; }
        public bool Unchecked { get; set; }
        public EventType Type { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
