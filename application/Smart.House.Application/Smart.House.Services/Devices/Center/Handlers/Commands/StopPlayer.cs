using Smart.House.Application.Commands;
using Smart.House.Application.Domain.Devices.Center.Providers.Video;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Center.Handlers.Commands
{
    public class StopPlayer : IRequest
    {
    }

    public class StopPlayerHandler : IRequestHandler<StopPlayer>
    {
        private readonly IVideoPlayer _videoPlayer;

        public StopPlayerHandler(IVideoPlayer videoPlayer)
        {
            _videoPlayer = videoPlayer;
        }

        public async Task Handle(StopPlayer command)
        {
            await _videoPlayer.Stop();
        }
    }

}
