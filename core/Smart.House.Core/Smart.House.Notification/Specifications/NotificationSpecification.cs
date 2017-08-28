using Smart.House.Domain.Entities;

namespace Smart.House.Notification.Specifications
{
    public class NotificationSpecification
    {
        private readonly Entities.Notification _notification;

        public NotificationSpecification(Entities.Notification notification)
        {
            _notification = notification;
        }

        public bool IsSentNotification()
        {
            return _notification != null;
        }

        public bool IsReadyForEmailSending(Device device)
        {
            var sendNotification = IsSentNotification();

            return device.EmailNotificationEnabled
                && !sendNotification;
        }

        public bool IsReadyForAmbientNotification(Device device)
        {
            var sendNotification = IsSentNotification();

            return device.AmbientNotificationEnabled
                && !sendNotification;
        }
    }
}
