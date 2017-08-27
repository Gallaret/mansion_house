using System.Collections.Generic;

namespace Smart.House.Application.States
{
    public class NotificationState : IDeviceState
    {
        public string Identifier { get; set; }
        public IReadOnlyCollection<Notification.Entities.Notification> Sent { get; set; }
        public IReadOnlyCollection<Notification.Entities.Notification> Upcoming { get; set; }
    }
}
