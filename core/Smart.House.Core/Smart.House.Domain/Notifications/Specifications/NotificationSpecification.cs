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
