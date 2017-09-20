using Dapper;
using Smart.House.Application.Commands;
using Smart.House.Read.Connection;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
using System;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Smart.House.Read
{
    public class GetNotificationSettingsRequestHandler
        : IRequestHandler<NotificationSettingsQuery, NotificationSettingsResult>
    {
        private readonly ReadConnection _connection;

        public GetNotificationSettingsRequestHandler(ReadConnection connection)
        {
            _connection = connection;
        }

        public async Task<NotificationSettingsResult> Handle(NotificationSettingsQuery command)
        {
            var now = DateTime.Now;

            string notificationQuery = "SELECT 1 FROM Notifications n WHERE n.Value = @Value AND n.Sent = 0";

            string deviceQuery = "SELECT AmbientNotificationEnabled, EmailNotificationEnabled FROM Devices WHERE Identifier = @Identifier;";

            string notificatorQuery = $"SELECT d.Identifier FROM Devices d " +
                $"INNER JOIN Harmonograms h ON h.Identifier = d.Identifier AND h.Type = @Type " +
                $"WHERE d.Receiver IS NOT NULL AND {now.DayOfWeek.ToString()} = 1 " +
                $"AND CAST(@Current as time) >= h.[From] AND CAST(@Current as time) <= h.[To]";

            using (var connection = new SqlConnection(_connection.ConnectionString))
            {
                connection.Open();

                var result = new NotificationSettingsResult
                {
                    ShouldSend = await connection.QuerySingleAsync<bool>(notificationQuery,
                        new { Value = command.NotificationValue })
                };

                if (!result.ShouldSend) return result;

                result.Noticators = await connection.QueryAsync<NotificatorResult>(notificatorQuery,
                    new { Type = command.HarmonogramType, Current = now.TimeOfDay });

                result.Device = await connection.QuerySingleAsync<DeviceResult>(deviceQuery, 
                    new { Identifier = command.Identifier });

                return result;
            }
        }
    }
}
