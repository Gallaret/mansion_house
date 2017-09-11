using Smart.House.Core;

namespace Smart.House.Domain.Devices.Events
{
    public class MotionDetectedEvent : IAsyncEvent<string>
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
