using Smart.House.Notification.Repositories;
using System;
using Smart.House.Notification.Entities;
using Smart.House.EntityFramework.DataModel;
using System.Linq;

namespace Smart.House.EntityFramework.Repositories
{
    using Notification = Notification.Entities.Notification;

    public class NotificationRepository : INotificationRepository
    {
        private readonly DataContext _context;

        public NotificationRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Notification notification)
        {
            _context.Notifications.Add(notification);
        }

        public Notification TryGetLast(string value, EventType type)
        {
            return _context.Notifications.OrderByDescending(notification => notification.CreatedDate)
                .FirstOrDefault(notification => notification.Type == type && notification.Value == value);
        }
    }
}
