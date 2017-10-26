using Smart.House.Application.Commands;
using Smart.House.Application.Domain.Devices.Center.Providers.Video;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Center.Handlers.Commands
{
    public class StartPlaying : IRequest
    {
        public int VideoId { get; set; } = 2;
    }

    public class StartPlayingHandler : IRequestHandler<StartPlaying>
    {
        private readonly IVideoPlayer _videoPlayer;

        public StartPlayingHandler(IVideoPlayer videoPlayer)
        {
            _videoPlayer = videoPlayer;
        }

        public async Task Handle(StartPlaying command)
        {
            await _videoPlayer.Play(command.VideoId);
        }
    }
}
