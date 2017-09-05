using Smart.House.Application.Repositories;
using Smart.House.Application.Services;
using Smart.House.Application.Services.States;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Smart.House.Services.State
{
    public class NotificationService : IStateService<NotificationState>
    {
        private readonly INotificationRepository _notificationRepository;
        private readonly IDeviceRepository<Device> _deviceRepository;

        public NotificationService(INotificationRepository notificationRepository, 
            IDeviceRepository<Device> deviceRepository)
        {
            _notificationRepository = notificationRepository;
            _deviceRepository = deviceRepository;
        }

        public async Task<NotificationState> GetNewState(NotificationState state)
        {




            var notifications = new List<Notification>();
            foreach (var notification in state.Notifications)
            {
                if (!notification.Sent)
                {
                    var device = await _deviceRepository.GetAsync(state.Identifier);
                    if (device == null) return await Task.FromResult(state);

                    notification.SetNotificationSettings(device);
                }
                notifications.Add(notification);
            }

            var newState = new NotificationState(notifications);
            return await Task.FromResult(newState);
        }
    }
}
