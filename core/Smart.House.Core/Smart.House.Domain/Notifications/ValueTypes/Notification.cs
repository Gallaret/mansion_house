using System;

namespace Smart.House.Domain.Notifications.ValueTypes
{
    public enum EventType
    {
        None = 0,
        MotionDetection = 1,
        Recording = 2
    }

    public class Notification
    {
        public string Value { get; set; }
        public bool Unchecked { get; set; }
        public EventType Type { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool Sent { get; set; }
    }
}
