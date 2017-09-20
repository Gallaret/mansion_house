using Orleans;
using Smart.House.Domain.Notifications.ValueTypes;
using Smart.House.Grains.Resolvers;
using Smart.House.Interface.Devices;
using Smart.House.Services.Devices.Camera.Handlers.Commands;
using System.Threading.Tasks;

namespace Smart.House.Grains.Devices
{
    public class Notificator : Grain, INotificator
    {
        private readonly Mediator _mediator;

        public Notificator(Mediator mediator)
        {
            _mediator = mediator;
        }

        public async Task SendEmail(string identifier, Event @event, string value)
        {
            await _mediator.DispatchRequest(new EmailNotificationCommand
            {
                Identifier = identifier,
                Type = EventType.MotionDetected,
                Value = value
            });
        }

        public async Task SendTextMessage(string identifier, Event @event, string value)
        {
            await _mediator.DispatchRequest(new EmailNotificationCommand
            {
                Identifier = identifier,
                Type = EventType.MotionDetected,
                Value = value
            });
        }
    }
}
