using Smart.House.Application.States;

namespace Smart.House.Application.Services
{
    public interface INotificationService
    {
        NotificationState GetNewState(NotificationState state);
    }
}
