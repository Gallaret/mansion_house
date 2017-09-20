using Orleans;
using Orleans.Runtime.Configuration;
using Smart.House.Domain.Devices.ValueTypes;
using Smart.House.Domain.Notifications.ValueTypes;
using Smart.House.Grains.Resolvers;
using Smart.House.Interface.Devices;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
using Smart.House.Services.Devices.Camera.Handlers.Commands;
using System.Linq;
using System.Threading.Tasks;

namespace Smart.House.Grains.Notifications
{
    public class Broadcaster : Grain, IBroadcaster
    {
        private readonly Mediator _mediator;

        public Broadcaster(Mediator mediator)
        {
            _mediator = mediator;
        }

        public async Task Broadcast(string identifier, Event @event, string value)
        {
            var result = await _mediator.DispatchRequest<NotificationSettingsQuery, NotificationSettingsResult>(
                new NotificationSettingsQuery
                {
                    Identifier = identifier,
                    HarmonogramType = GetTypeByEvent(@event),
                    NotificationValue = value
                });

            if (result.ShouldSend)
            {
                await UseNotificators(value, @event, result);
                await UseAmbilight(value, @event, result);
            }
        }

        private async Task UseNotificators(string value, Event @event,
            NotificationSettingsResult notificationSettings)
        {
            var client = await GetClient();

            notificationSettings.Noticators.ToList().ForEach(async result =>
            {
                var notificator = client.GetGrain<INotificator>(result.Identifier);

                if(notificationSettings.Device.EmailNotificationEnabled)
                    await notificator.SendEmail(result.Identifier, @event, value);
            });
        }

        private async Task UseAmbilight(string value, Event @event, 
            NotificationSettingsResult notificationSettings)
        {
            if (notificationSettings.Device.AmbientNotificationEnabled)
                switch (@event)
                {
                    case Event.Motion:          
                        await _mediator.DispatchRequest(new AmbilightAlarmCommand
                        {
                            Identifier = "ambilight",
                            Value = value,
                            EventType = EventType.MotionDetected //consider use not domain object
                        });
                        break;
                }
        }

        private HarmonogramType GetTypeByEvent(Event type)
        {
            switch (type)
            {
                case Event.Motion:
                    return HarmonogramType.MotionDetection;
                default:
                    return HarmonogramType.MotionDetection;
            }
        }

        private async Task<IClusterClient> GetClient()
        {
            var config = ClientConfiguration.LocalhostSilo();
            var client = new ClientBuilder().UseConfiguration(config).Build();

            await client.Connect();

            return client;
        }
    }
}
