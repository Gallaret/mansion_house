using Smart.House.Domain.Devices.Entities;

namespace Smart.House.Domain.Devices.Events
{
    public class MotionDetectedEvent : IAsyncNotification
    {
        public MotionDetectedEvent(string identifier, string value)
        {
            Identifier = identifier;
            Value = value;
        }

        public string Identifier { get; private set; }

        public string Value { get; private set; }
    }
}
