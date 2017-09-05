using Smart.House.Application.Commands;
using Smart.House.Domain.Notifications.ValueTypes;

namespace Smart.House.Services.Handlers.Requests.Commands
{
    public class SendNotificationCommand : IRequest
    {
        public string Provider { get; set; }
        public Notification Notification { get; set; }
    }
}
