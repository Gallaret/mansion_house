using Orleans;
using Smart.House.Interface.Notifications;
using System.Threading.Tasks;

namespace Smart.House.Interface.Devices
{
    public interface INotificator : IGrainWithStringKey
    {
        Task SendEmail(string identifier, Event @event, string value);
    }
}
