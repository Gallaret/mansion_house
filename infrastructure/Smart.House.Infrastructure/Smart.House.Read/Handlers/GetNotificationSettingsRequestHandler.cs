using Dapper;
using Smart.House.Application.Commands;
using Smart.House.Domain.Devices.Entities;
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

            string deviceQuery = "SELECT AmbientNotificationEnabled FROM Devices WHERE Identifier = @Identifier;";

            string notificatorQuery = $"SELECT d.Identifier FROM Devices d " +
                $"INNER JOIN Harmonograms h ON h.Identifier = d.Identifier AND h.Type = @Type " +
                $"WHERE d.Receiver IS NOT NULL AND {now.DayOfWeek.ToString()} = 1 " +
                $"AND CAST(@Current as time) >= h.[From] AND CAST(@Current as time) <= h.[To]";

            using (var connection = new SqlConnection(_connection.ConnectionString))
            {
                connection.Open();

                var notificators = await connection.QueryAsync<NotificatorResult>(notificatorQuery,
                    new { Type = command.HarmonogramType, Current = now.TimeOfDay });

                var device = await connection.QuerySingleAsync<DeviceResult>(deviceQuery, 
                    new { Identifier = command.Identifier });

                var result = new NotificationSettingsResult
                {
                    Noticators = notificators,
                    Device = device
                };

                return await Task.FromResult(result);
            }
        }
    }
}
