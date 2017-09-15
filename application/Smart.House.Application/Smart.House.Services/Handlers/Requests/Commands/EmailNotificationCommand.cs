using Smart.House.Application.Commands;
using Smart.House.Domain.Notifications.ValueTypes;

namespace Smart.House.Services.Handlers.Requests.Commands
{
    public class EmailNotificationCommand : IRequest
    {
        public string Identifier { get; set; }
        public EventType Type { get; set; }
        public string Value { get; set; }
    }
}
