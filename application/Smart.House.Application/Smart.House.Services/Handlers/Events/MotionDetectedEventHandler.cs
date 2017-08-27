using Smart.House.Application.Events;
using Smart.House.Domain.Events;
using Smart.House.Notification.Factories.Notification;
using Smart.House.Notification.Repositories;
using System.Threading.Tasks;

namespace Smart.House.Services.Handlers.Events
{
    public class MotionDetectedEventHandler : IDomainEventHandler<MotionDetectedEvent>
    {
        private readonly NotificationFactory _factory = new NotificationFactory();

        private readonly INotificationRepository _repository;

        public MotionDetectedEventHandler(INotificationRepository repository)
        {
            _repository = repository;
        }

        public async Task PublishAsync(MotionDetectedEvent @event)
        {
            var notification = _factory.Create(
                Notification.Entities.EventType.MotionDetected, @event.Value);

            await Task.Factory.StartNew(() =>
            {
                _repository.Add(notification);
            });
        }
    }
}
