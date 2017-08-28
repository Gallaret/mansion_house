namespace Smart.House.Notification.Repositories
{
    public interface INotificationRepository
    {
        void Add(Entities.Notification notification);

        Entities.Notification TryGetLast(string value, Entities.EventType type);
    }
}
