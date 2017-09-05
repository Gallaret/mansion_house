namespace Smart.House.Application.Repositories
{
    using Domain.Notifications.ValueTypes;

    public interface INotificationRepository
    {
        void Add(Notification notification);

        Notification TryGetLast(string value, EventType type);
    }
}
