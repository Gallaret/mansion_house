using Smart.House.Domain.Notifications.ValueTypes;
using System;

namespace Smart.House.Domain.Notifications.Factories
{
    public class NotificationFactory
    {
        public Notification Create(EventType type, string value)
        {
            var now = DateTime.Now;

            return new Notification
            {
                Type = type,
                Value = value,
                Unchecked = true,
                Description = GetDescription(type, value, now),
                CreatedDate = now
            };
        }

        private string GetDescription(EventType type, string value, DateTime now)
        {
            switch (type)
            {
                case EventType.MotionDetection:
                    {
                        return $"Motion detected is occured at: {now}, file: {value}";
                    }
                default:
                    return "";
            }
        }
    }
}
