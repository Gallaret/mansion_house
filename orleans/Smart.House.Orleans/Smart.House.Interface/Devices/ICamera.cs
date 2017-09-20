using Orleans;
using Smart.House.Interface.Devices.States;
using System.Threading.Tasks;

namespace Smart.House.Interface
{
    public interface ICamera : IGrainWithStringKey
    {
        Task<CameraState> GetState();
        Task Initialize(string identifier);
    }
}
