using Dapper;
using Smart.House.Application.Commands;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Read.Connection;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
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
            string query = "SELECT AmbientNotificationEnabled FROM Devices WHERE Identifier = @Identifier;";

            using (var connection = new SqlConnection(_connection.ConnectionString))
            {
                connection.Open();

                var device = connection.QuerySingle<Device>(query, 
                    new { Identifier = command.Identifier });

                var result = new NotificationSettingsResult
                {
                    ShouldSendAmbilight = device.AmbientNotificationEnabled
                };

                return await Task.FromResult(result);
            }
        }
    }
}
