using Smart.House.Application.Dtos.Camera;
using Smart.House.Application.Dtos.Connection;
using System.Threading.Tasks;

namespace Smart.House.Application.Providers.Camera
{
    public interface ICameraProvider
    {
        Task<Motion> DetectMotion(MotionSettings camera, Credential credential);
    }
}
