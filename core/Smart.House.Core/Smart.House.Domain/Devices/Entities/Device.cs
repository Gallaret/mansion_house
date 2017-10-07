using Smart.House.Core;
using Smart.House.Domain.Devices.ValueTypes;
using System;
using System.Collections.Generic;

namespace Smart.House.Domain.Devices.Entities
{
    public enum DeviceType
    {
        Camera = 0,
        Ambilight,
        Notificator,
        Storage
    }

    public abstract class Device : AggregateRoot<string>
    {
        private string _identifier;

        public override string Identifier => _identifier;

        public string Provider { get; private set; }
        public DeviceType DeviceType { get; private set; }
        public string Login { get; private set; }
        public string Password { get; private set; }
        public string Address { get; private set; }
        public string Path { get; private set; }
        public bool AmbientNotificationEnabled { get; protected set; }
        public bool SoundNotificationEnabled { get; protected set; }
        public bool EmailNotificationEnabled { get; protected set; }
        public bool SmsNotificationEnabled { get; protected set; }
        public List<Harmonogram> Harmonograms { get; private set; }

        public Device() { }

        public Device(string identifier, string provider, DeviceType type)
        {    
            Provider = provider;
            DeviceType = type;
            _identifier = identifier;
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
    }
}
