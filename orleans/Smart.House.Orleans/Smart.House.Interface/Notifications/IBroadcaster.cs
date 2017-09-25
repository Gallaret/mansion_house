using Orleans;
using Smart.House.Interface.Devices;
using System.Threading.Tasks;

namespace Smart.House.Interface.Notifications
{
    public enum Event
    {
        Motion = 0
    }

    public interface IBroadcaster : IGrainWithStringKey
    {
        Task Broadcast(Notify notify);
    }
}
