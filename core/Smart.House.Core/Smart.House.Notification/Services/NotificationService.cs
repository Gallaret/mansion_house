using Smart.House.Domain.Entities;
using Smart.House.Domain.Repositories;
using Smart.House.Notification.Providers;
using Smart.House.Notification.Repositories;
using Smart.House.Notification.Specifications;

namespace Smart.House.Notification.Services
{
    public class NotificationService
    {
        private readonly INotificationProviderFactory _notificationProviderFactory;
        private readonly INotificationRepository _notificationRepository;
        private readonly IDeviceRepository<Device> _deviceRepository;

        public NotificationService(INotificationProviderFactory notificationProviderFactory,
            INotificationRepository notificationRepository, IDeviceRepository<Device> deviceRepository)
        {
            _notificationProviderFactory = notificationProviderFactory;
            _notificationRepository = notificationRepository;     
            _deviceRepository = deviceRepository;           
        }

        public bool SendNotification(Entities.Notification notification, string identifier)
        {
            var device = _deviceRepository.Get(identifier);
            var existingNotification = _notificationRepository.TryGetLast(
                notification.Value, notification.Type);

            var specification = new NotificationSpecification(existingNotification);

            if (specification.IsReadyForEmailSending(device)) SendEmailNotification(notification);

            if (!specification.IsSentNotification())
            {
                _notificationRepository.Add(notification);
                return true;
            }
            else
            {
                UpdateNotification(existingNotification, notification);
                return false;
            }
        }

        private void SendEmailNotification(Entities.Notification notification)
        {
            var emailProvider = _notificationProviderFactory.Create("email");
            emailProvider.Send(notification);
            //notification.EmailSent = true; 
        }

        private void SendAmbientNotification(Entities.Notification notification)
        {
            var ambientLightningProvider = _notificationProviderFactory.Create("ambient");
            ambientLightningProvider.Send(notification);
            //notification.AmbientLightningSent = true; 
        }

        private void UpdateNotification(Entities.Notification existing, Entities.Notification incoming)
        {
            //existing.EmailSent = existing.EmailSent != incoming.EmailSent 
            //    ? incoming.EmailSent : existing.EmailSent;
            //existing.AmbientLightningSent = existing.AmbientLightningSent != incoming.AmbientLightningSent
            //    ? incoming.AmbientLightningSent : existing.AmbientLightningSent;
        }
    }
}
