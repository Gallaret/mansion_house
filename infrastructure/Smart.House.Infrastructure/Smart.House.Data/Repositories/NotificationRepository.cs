using System.Linq;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Collections.Generic;
using Smart.House.Data.Model;
using Smart.House.Application.Domain.Devices.Notificator.Repositories;

namespace Smart.House.Data.Repositories
{
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

        public IEnumerable<Notification> GetLastNotifications(int count)
        {
            return _context.Notifications.OrderByDescending(n => n.CreatedDate).Take(count);
        }

        public Notification TryGetLast(string value, EventType type)
        {
            return _context.Notifications.OrderByDescending(notification => notification.CreatedDate)
                .FirstOrDefault(notification => notification.Type == type && notification.Value == value);
        }
    }
}
