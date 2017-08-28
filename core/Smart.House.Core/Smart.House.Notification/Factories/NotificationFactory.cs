using System;

namespace Smart.House.Notification.Factories.Notification
{
    public class NotificationFactory
    {
        public Entities.Notification Create(Entities.EventType type, string value)
        {
            var now = DateTime.Now;

            return new Entities.Notification
            {
                Type = type,
                Value = value,
                Unchecked = true,
                Description = GetDescription(type, value, now),
                CreatedDate = now
            };
        }

        private string GetDescription(Entities.EventType type, string value, DateTime now)
        {
            switch (type)
            {
                case Entities.EventType.MotionDetected:
                    {
                        return $"Motion detected is occured at: {now}, file: {value}";
                    }
                default:
                    return "";
            }
        }
    }
}
