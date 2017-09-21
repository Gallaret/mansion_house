using Orleans;
using System.Threading.Tasks;

namespace Smart.House.Interface.Notifications
{
    public enum Event
    {
        Motion = 0
    }

    public interface IBroadcaster : IGrainWithStringKey
    {
        Task Broadcast(string identifier, Event @event, string value);
    }
}
