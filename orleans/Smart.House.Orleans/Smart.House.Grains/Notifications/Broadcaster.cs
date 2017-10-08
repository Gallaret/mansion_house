using Orleans;
using Orleans.Runtime.Configuration;
using Smart.House.Grains.Resolvers;
using Smart.House.Interface.Devices;
using Smart.House.Interface.Notifications;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
using Smart.House.Services.Devices.Ambilight.Handlers.Commands;
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

        public async Task Broadcast(Notify notify)
        {
            var result = await _mediator.DispatchRequest<NotificationSettingsQuery, NotificationSettingsResult>(
                new NotificationSettingsQuery
                {
                    Identifier = notify.Identifier,
                    NotificationValue = notify.Value
                });

            if (result.ShouldSend)
            {
                await UseNotificators(notify, result);
                await UseAmbilight(notify, result);
            }
        }

        private async Task UseNotificators(Notify notify,
            NotificationSettingsResult notificationSettings)
        {
            var client = await GetClient();

            notificationSettings.Notificators.ToList().ForEach(async result =>
            {
                var notificator = client.GetGrain<INotificator>(result.Identifier);
                await notificator.Start(result.Identifier);

                //if (notificationSettings.Device.EmailNotificationEnabled)
                //    await notificator.SendEmail(notify);
                //if (notificationSettings.Device.SmsNotificationEnabled)
                //    await notificator.SendTextMessage(notify);
            });
        }

        private async Task UseAmbilight(Notify notify, 
            NotificationSettingsResult notificationSettings)
        {
            if (notificationSettings.Device.AmbientNotificationEnabled)
                switch (notify.Event)
                {
                    case Event.Motion:          
                        await _mediator.DispatchRequest(new AmbilightAlarmCommand
                        {
                            Identifier = "ambilight",
                            Value = notify.Value
                        });
                        break;
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
