using System;
using System.Collections.Generic;
using System.Text;

namespace Smart.House.Domain.Entities
{
    public enum EventType
    {
        MotionDetected = 0,
    }


    public class Notification
    {
        public bool Unchecked;

        public string Value;

        public EventType Type;
    }
}
