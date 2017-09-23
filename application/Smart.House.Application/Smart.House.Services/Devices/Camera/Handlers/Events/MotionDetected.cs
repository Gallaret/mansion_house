using Smart.House.Application.Events;
using Smart.House.Application.Repositories;
using Smart.House.Domain.Devices.Events;
using Smart.House.Domain.Devices.Specifications;
using Smart.House.Domain.Notifications.Factories;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Camera.Handlers.Events
{
    public class MotionDetected : IDomainEventHandler<MotionDetectedEvent>
    {
        private readonly NotificationFactory _factory = new NotificationFactory();
        private readonly ICameraRepository _cameraRepository;
        private readonly INotificationRepository _repository;

        public MotionDetected(ICameraRepository cameraRepository,
            INotificationRepository repository)
        {
            _cameraRepository = cameraRepository;
            _repository = repository;
        }

        public async Task PublishAsync(MotionDetectedEvent @event)
        {          
            var camera = await _cameraRepository.GetAsync(@event.Identifier);
            var specification = new CameraSpecification(camera);

            var last = _repository.TryGetLast(@event.Value, EventType.MotionDetected);
            if (last == null || specification.IsNotificable(last))
            {
                var notification = _factory.Create(
                    EventType.MotionDetected, @event.Value);

                _repository.Add(notification);
            }    
        }
    }
}
