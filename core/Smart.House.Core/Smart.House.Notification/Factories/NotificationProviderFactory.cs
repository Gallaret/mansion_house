using Smart.House.Notification.Providers;
using System;
using System.Collections.Generic;

namespace Smart.House.Domain.Factories.Notification
{
    public class NotificationProviderFactory : Dictionary<string, Func<INotificationProvider>>, INotificationProviderFactory
    {
        public INotificationProvider Create(string name)
        {
            var provider = this[name]();

            if (provider == null)
            {
                throw new ArgumentNullException($"Provider for {name} is not registered");
            }

            return provider;
        }
    }
}
