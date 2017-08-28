using Smart.House.Application.Services;
using Smart.House.Application.States;
using Smart.House.Domain.Entities;
using Smart.House.Domain.Repositories;
using Smart.House.Notification.Repositories;
using System.Collections.Generic;

namespace Smart.House.Services
{
    using DomainService = Notification.Services.NotificationService;
    using Notification = Notification.Entities.Notification;

    public class NotificationService :  INotificationService
    {
        private readonly DomainService _service;
        private readonly INotificationRepository _notificationRepository;
        private readonly IDeviceRepository<Device> _deviceRepository;

        public NotificationService(INotificationRepository notificationRepository, 
            IDeviceRepository<Device> deviceRepository, DomainService service)
        {
            _notificationRepository = notificationRepository;
            _deviceRepository = deviceRepository;
            _service = service;
        }

        public NotificationState GetNewState(NotificationState state)
        {
            var notification = _notificationRepository.TryGetLast(state.Value, state.Type);
            if (notification == null) return state;

            var device = _deviceRepository.Get(state.Identifier);
            if (device == null) return state;

            var newState = new NotificationState
            {
                Sent = UpdateNotifications(state, notification),
                Identifier = state.Identifier,
                Type = state.Type,
                Value = state.Value,
                ShouldSendAmbient = device.AmbientNotificationEnabled,
                ShouldSendEmail = device.EmailNotificationEnabled,
                ShouldSendSound = device.SoundNotificationEnabled,
                NewNotification = true
            };

            return newState;
        }

        private List<Notification> UpdateNotifications(NotificationState state, Notification notification)
        {
            var notifications = new List<Notification>();
            for (int i = 1; i < state.Sent.Count; i++)
            {
                if (state.Sent.GetEnumerator().MoveNext())
                {
                    notifications.Add(state.Sent.GetEnumerator().Current);
                } 
            }
            notifications.Add(notification);

            return notifications;
        }
    }
}
