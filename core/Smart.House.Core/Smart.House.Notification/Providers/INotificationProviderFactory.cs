namespace Smart.House.Notification.Providers
{
    public interface INotificationProvider
    {
        void Send(Entities.Notification notification);
    }

    public interface INotificationProviderFactory
    {
        INotificationProvider Create(string name);
    }
}
