using System;

namespace Smart.House.Domain.Entities
{

    public enum HarmonogramType
    {
        MotionDetection = 0,
        Reminder = 1,
        Recording
    }

    //Is a value type?
    public class Harmonogram
    {
        public string Identifier { get; set; }
        public Device Device { get; set; }
        public HarmonogramType Type { get; set; }
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

        public Harmonogram(string identifier, HarmonogramType type)
        {
            Type = type;
            Identifier = identifier;      
        }
    }
}
