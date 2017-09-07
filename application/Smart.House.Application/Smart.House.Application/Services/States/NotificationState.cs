using Smart.House.Domain.Notifications.ValueTypes;
using System.Collections.Generic;

namespace Smart.House.Application.Services.States
{
    public class NotificationState : IDeviceState
    {
        public string Identifier { get; }

        public NotificationState(ICollection<Notification> notifications)
        {
            Notifications = notifications;
        }

        public ICollection<Notification> Notifications { get; set; }
    }
}
