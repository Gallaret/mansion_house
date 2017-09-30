using Smart.House.Application.Domain.Devices.Camera.Dtos;
using Smart.House.Application.Domain.Devices.Storekeeper.Dtos;
using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices.Camera.Providers
{
    public interface ICameraProvider
    {
        Task<Motion> DetectMotion(Storage storage);
        void StartRecording();
        void StopRecording();
    }
}
