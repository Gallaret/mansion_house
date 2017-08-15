using System;

namespace Smart.House.Notification.Factories.Notification
{
    public class NotificationFactory
    {
        public Entities.Notification Create(Entities.EventType type, string value)
        {
            return new Entities.Notification
            {
                Type = type,
                Value = value,
                Unchecked = true,
                Description = GetDescription(type, value)
            };
        }

        private string GetDescription(Entities.EventType type, string value)
        {
            switch (type)
            {
                case Entities.EventType.MotionDetected:
                    {
                        return $"Motion detected is occured at: {DateTime.Now}, file: {value}";
                    }
                default:
                    return "";
            }
        }
    }
}
