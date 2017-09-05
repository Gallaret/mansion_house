using Smart.House.Application.Events;
using Smart.House.Application.Repositories;
using Smart.House.Domain.Devices.Events;
using Smart.House.Domain.Notifications.Factories;
using Smart.House.Domain.Notifications.ValueTypes;
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
                EventType.MotionDetected, @event.Value);

            _repository.Add(notification);
        }
    }
}
