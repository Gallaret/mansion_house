using Smart.House.Application.Commands;
using Smart.House.Domain.Notifications.ValueTypes;

namespace Smart.House.Services.Handlers.Requests.Commands
{
    public class AmbilightAlarmCommand : IRequest
    {
        public string Identifier { get; set; }
    }
}
