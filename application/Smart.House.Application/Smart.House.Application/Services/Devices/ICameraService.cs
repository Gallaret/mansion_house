using Smart.House.Application.Dtos.Camera;
using System.Threading.Tasks;

namespace Smart.House.Application.Services.Devices
{
    public interface ICameraService
    {
        Task<Motion> MotionDetection(string identifier, string lastDetectedFileName);
    }
}
