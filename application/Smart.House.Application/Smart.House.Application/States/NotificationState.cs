using Smart.House.Notification.Entities;
using System.Collections.Generic;

namespace Smart.House.Application.States
{
    public class NotificationState : IDeviceState
    {
        public string Identifier { get; set; }
        public EventType Type { get; set; }
        public string Value { get; set; }
        public bool NewNotification { get; set; }
        public bool ShouldSendEmail { get; set; }
        public bool ShouldSendAmbient{ get; set; }
        public bool ShouldSendSound { get; set; }

        public IReadOnlyCollection<Notification.Entities.Notification> Sent { get; set; }
    }
}
