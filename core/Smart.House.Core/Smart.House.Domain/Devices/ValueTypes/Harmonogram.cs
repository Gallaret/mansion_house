using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Notifications.ValueTypes;
using System;

namespace Smart.House.Domain.Devices.ValueTypes
{
    public class Harmonogram
    {
        public string Identifier { get; set; }
        public Device Device { get; set; }
        public EventType Type { get; set; }
        public bool Monday { get; set; }
        public bool Tuesday { get; set; }
        public bool Wednesday { get; set; }
        public bool Thursday { get; set; }
        public bool Friday { get; set; }
        public bool Saturday { get; set; }
        public bool Sunday { get; set; }
        public TimeSpan From { get; set; }
        public TimeSpan To { get; set; }
        public bool IsActive { get; set; }

        public Harmonogram() { }

        public Harmonogram(string identifier, EventType type)
        {
            Type = type;
            Identifier = identifier;      
        }
    }
}
