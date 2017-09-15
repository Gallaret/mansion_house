using Smart.House.Application.Commands;
using Smart.House.Domain.Devices.ValueTypes;

namespace Smart.House.Read.Handlers.Queries
{
    public class NotificationSettingsQuery : IRequest
    {
        public string Identifier { get; set; }
        public HarmonogramType HarmonogramType { get; set; }
    }
}
