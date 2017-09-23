using Smart.House.Application.Commands;

namespace Smart.House.Read.Handlers.Queries
{
    public class MessageSettingsQuery : IRequest
    {
        public string Identifier { get; }

        public MessageSettingsQuery(string identifier)
        {
            Identifier = identifier;
        }
    }
}
