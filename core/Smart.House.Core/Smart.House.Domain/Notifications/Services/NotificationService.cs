using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Notifications.Specifications;
using Smart.House.Domain.Notifications.ValueTypes;

namespace Smart.House.Domain.Notifications.Services
{
    public class NotificationService
    {
        public bool ShouldSendNotification(Device device, Notification notification)
        {
            var specification = new NotificationSpecification(notification);

            return specification.IsReadyForAmbientNotification(device);
        }
    }
}
