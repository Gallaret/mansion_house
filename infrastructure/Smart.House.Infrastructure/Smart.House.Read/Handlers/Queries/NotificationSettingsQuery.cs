using Smart.House.Application.Commands;

namespace Smart.House.Read.Handlers.Queries
{
    public class NotificationSettingsQuery : IRequest
    {
        public string Identifier { get; set; }
        public string NotificationValue { get; set; }
    }
}
