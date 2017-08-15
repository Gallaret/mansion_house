using System;
using System.Collections.Generic;

namespace Smart.House.Domain.Entities
{
    public enum DeviceType
    {
        Camera = 0
    }

    public abstract class Device
    {
        public string Identifier { get; private set; }
        public string Producent { get; private set; }
        public bool AmbientNotificationEnabled { get; protected set; }
        public bool SoundNotificationEnabled { get; protected set; }
        public bool EmailNotificationEnabled { get; protected set; }
        public bool SmsNotificationEnabled { get; protected set; }
        public List<Harmonogram> Harmonograms { get; private set; }

        public Device() { }

        public Device(int id, string producent, DeviceType type)
        {
            Identifier = type.ToString().ToLower() + id;
            Producent = producent;
            Harmonograms = new List<Harmonogram>();
        }

        public void AddHarmonogram(Harmonogram harmonogram)
        {
            if (string.IsNullOrEmpty(harmonogram.Identifier))
            {
                throw new ArgumentNullException(nameof(harmonogram.Identifier));
            }

            Harmonograms.Add(harmonogram);
        }

        public abstract bool IsActive { get; }
    }
}
