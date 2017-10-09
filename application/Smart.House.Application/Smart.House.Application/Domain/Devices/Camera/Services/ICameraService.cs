using Smart.House.Application.Domain.Devices.Camera.Dtos;
using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices.Camera.Services
{
    public interface ICameraService
    {
        Task<Motion> MotionDetection(string identifier, string lastDetectedFileName);

        Task<bool> Recording(string identifier);
    }
}
