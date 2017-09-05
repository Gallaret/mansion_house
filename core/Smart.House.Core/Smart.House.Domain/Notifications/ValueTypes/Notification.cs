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
        private bool _ambilight;
        private bool _email;
        private bool _sound;
        private bool _sms;

        public string Value { get; set; }
        public bool Unchecked { get; set; }
        public string Identifier { get; set; }
        public EventType Type { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool Sent { get; set; }

        public void SetNotificationSettings(Device settings)
        {
            _ambilight = settings.AmbientNotificationEnabled;
            _email = settings.EmailNotificationEnabled;
            _sound = settings.SoundNotificationEnabled;
            _sms = settings.SmsNotificationEnabled;
        }

        public bool AmblightEnabled()
        {
            return _ambilight;
        }
    }
}
