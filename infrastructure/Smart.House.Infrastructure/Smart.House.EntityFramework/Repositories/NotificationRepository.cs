using Smart.House.EntityFramework.DataModel;
using System.Linq;
using Smart.House.Application.Repositories;
using Smart.House.Domain.Notifications.ValueTypes;

namespace Smart.House.EntityFramework.Repositories
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

        public Notification TryGetLast(string value, EventType type)
        {
            return _context.Notifications.OrderByDescending(notification => notification.CreatedDate)
                .FirstOrDefault(notification => notification.Type == type && notification.Value == value);
        }
    }
}
