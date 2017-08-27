using Smart.House.Notification.Repositories;
using System;
using Smart.House.Notification.Entities;
using Smart.House.EntityFramework.DataModel;

namespace Smart.House.EntityFramework.Repositories
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly DataContext _context;

        public NotificationRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Notification.Entities.Notification notification)
        {
            //
        }

        public Notification.Entities.Notification TryGet(string value, EventType type)
        {
            //throw new NotImplementedException();
            return null;
        }
    }
}
