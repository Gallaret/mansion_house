using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Notifications.ValueTypes;

namespace Smart.House.Domain.Notifications.Specifications
{
    public class NotificationSpecification
    {
        private readonly Notification _notification;

        public NotificationSpecification(Notification notification)
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

            return !sendNotification
                && device.EmailNotificationEnabled;
        }

        public bool IsReadyForAmbientNotification(Device device)
        {
            var sendNotification = IsSentNotification();

            return !sendNotification
                && device.AmbientNotificationEnabled;
        }
    }
}
