using Orleans;
using Smart.House.Domain.Notifications.ValueTypes;
using Smart.House.Grains.Resolvers;
using Smart.House.Interface.Devices;
using Smart.House.Interface.Notifications;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
using Smart.House.Services.Devices.Notificator.Handlers.Commands;
using System.Threading.Tasks;

namespace Smart.House.Grains.Devices.Notificator
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
            var settings = await GetMessageResult(identifier);

            await _mediator.DispatchRequest(new EmailNotificationCommand
            {
                Identifier = identifier,
                Type = EventType.MotionDetected,
                Value = value,
                Email = settings.Email
            });
        }

        public async Task SendTextMessage(string identifier, Event @event, string value)
        {
            var settings = await GetMessageResult(identifier);

            await _mediator.DispatchRequest(new TextNotificationCommand
            {
                Identifier = identifier,
                Type = EventType.MotionDetected,
                Value = value,
                Mobile = settings.Mobile
            });
        }

        private async Task<MessageSettingsResult> GetMessageResult(string identifier)
        {
            return await _mediator.DispatchRequest<MessageSettingsQuery, MessageSettingsResult>(
                new MessageSettingsQuery(identifier));
        }
    }
}
