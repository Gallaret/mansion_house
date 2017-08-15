using Smart.House.Application.Services;
using Smart.House.Application.States;
using System.Collections.Generic;

namespace Smart.House.Services
{
    using DomainService = Notification.Services.NotificationService;
    using Notification = Notification.Entities.Notification;

    public class NotificationService :  INotificationService
    {
        private readonly DomainService _service;

        public NotificationService(DomainService service)
        {
            _service = service;
        }

        public NotificationState SendNotifications(NotificationState state)
        {
            var upcoming = new List<Notification>();
            var sent = new List<Notification>();

            foreach (var notification in state.Upcoming)
            {
                var result = _service.SendNotification(notification, state.Identifier);
                if (result) upcoming.Add(notification);
                else sent.Add(notification);
            }

            return new NotificationState
            {
                Identifier = state.Identifier,
                Upcoming = upcoming,
                Sent = sent
            };
        }
    }
}
