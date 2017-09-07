namespace Smart.House.Application.Repositories
{
    using Domain.Notifications.ValueTypes;
    using System.Collections.Generic;

    public interface INotificationRepository
    {
        void Add(Notification notification);

        Notification TryGetLast(string value, EventType type);

        IEnumerable<Notification> GetLastNotifications(int count);
    }
}
