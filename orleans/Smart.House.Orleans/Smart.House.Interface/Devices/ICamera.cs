using Orleans;
using Smart.House.Interface.Services.States;
using System.Threading.Tasks;

namespace Smart.House.Interface
{
    public interface ICamera : IGrainWithStringKey
    {
        Task<CameraState> GetCameraState();
    }
}
