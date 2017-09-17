﻿using Smart.House.Domain.Notifications.ValueTypes;
using System.Collections.Generic;

namespace Smart.House.Application.Repositories
{
    public interface INotificationRepository
    {
        void Add(Notification notification);

        Notification TryGetLast(string value, EventType type);

        IEnumerable<Notification> GetLastNotifications(int count);
    }
}
