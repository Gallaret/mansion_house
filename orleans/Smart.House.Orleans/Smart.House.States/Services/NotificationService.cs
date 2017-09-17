using Smart.House.Application.Repositories;
using Smart.House.Interface.Services;
using Smart.House.Interface.Services.States;
using System.Threading.Tasks;

namespace Smart.House.Services.State
{
    public class NotificationService : IStateService<NotificationState>
    {
        private readonly INotificationRepository _notificationRepository;

        public NotificationService(INotificationRepository notificationRepository)
        {
            _notificationRepository = notificationRepository;
        }

        public async Task<NotificationState> GetNewState(NotificationState state)
        {
            //var notifications = _notificationRepository
            //    .GetLastNotifications(state.Notifications.Count);
            //var newState = new NotificationState(notifications.ToArray());

            return await Task.FromResult(state);
        }
    }
}
