using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices.Center.Providers.Video
{
    public interface IVideoPlayer
    {
        Task Play(int movieId);
    }
}
