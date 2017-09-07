using Smart.House.Domain.Devices.Entities;
using System;

namespace Smart.House.Domain.Notifications.ValueTypes
{
    public enum EventType
    {
        Unchanged = 0,
        MotionDetected = 1,
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
