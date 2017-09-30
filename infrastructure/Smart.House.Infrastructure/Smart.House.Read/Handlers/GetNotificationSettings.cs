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
    public class GetNotificationSettings : IRequestHandler<NotificationSettingsQuery, NotificationSettingsResult>
    {
        private readonly ReadConnection _connection;

        public GetNotificationSettings(ReadConnection connection)
        {
            _connection = connection;
        }

        public async Task<NotificationSettingsResult> Handle(NotificationSettingsQuery command)
        {
            var now = DateTime.Now;

            string notificationQuery = "SELECT TOP(1) n.Type FROM Notifications n " +
                                       "WHERE n.Value = @Value ORDER BY n.CreatedDate DESC";

            string deviceQuery = "SELECT AmbientNotificationEnabled, EmailNotificationEnabled, SmsNotificationEnabled " +
                                 "FROM Devices WHERE Identifier = @Identifier;";

            string notificatorQuery = $"SELECT d.Identifier FROM Devices d " +
                                      $"INNER JOIN Harmonograms h ON h.Identifier = d.Identifier AND h.Type = @Type " +
                                      $"WHERE d.Receiver IS NOT NULL AND {now.DayOfWeek.ToString()} = 1 " +
                                      $"AND CAST(@Current as time) >= h.[From] AND CAST(@Current as time) <= h.[To]";

            using (var connection = new SqlConnection(_connection.ConnectionString))
            {
                connection.Open();

                var eventType = await connection.QuerySingleAsync<int>(notificationQuery,
                        new { Value = command.NotificationValue });

                var result = new NotificationSettingsResult
                {
                    ShouldSend = eventType != 0
                };

                if (!result.ShouldSend) return result;

                result.Notificators = await connection.QueryAsync<NotificatorSettings>(notificatorQuery,
                    new { Type = eventType, Current = now.TimeOfDay });

                result.Device = await connection.QuerySingleAsync<DeviceSettings>(deviceQuery, 
                    new { Identifier = command.Identifier });

                return result;
            }
        }
    }
}
