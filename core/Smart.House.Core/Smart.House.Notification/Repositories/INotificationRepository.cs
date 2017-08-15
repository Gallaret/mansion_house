namespace Smart.House.Notification.Repositories
{
    public interface INotificationRepository
    {
        void Add(Entities.Notification notification);

        Entities.Notification TryGet(string value, Entities.EventType type);
    }
}
