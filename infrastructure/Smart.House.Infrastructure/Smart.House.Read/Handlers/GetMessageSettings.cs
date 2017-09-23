using Dapper;
using Smart.House.Application.Commands;
using Smart.House.Read.Connection;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Smart.House.Read.Handlers
{
    public class GetMessageSettings : IRequestHandler<MessageSettingsQuery, MessageSettingsResult>
    {
        private readonly ReadConnection _connection;

        public GetMessageSettings(ReadConnection connection)
        {
            _connection = connection;
        }

        public async Task<MessageSettingsResult> Handle(MessageSettingsQuery command)
        {
            var query = "SELECT u.Email, u.Mobile FROM Users u" +
                " INNER JOIN Devices d ON u.Identifier = d.Receiver WHERE d.Identifier = @Identifier";

            using (var connection = new SqlConnection(_connection.ConnectionString))
            {
                connection.Open();

                var result = await connection.QuerySingleAsync<MessageSettingsResult>(
                    query, new { Identifier = command.Identifier });

                return result;
            }
        }
    }
}
