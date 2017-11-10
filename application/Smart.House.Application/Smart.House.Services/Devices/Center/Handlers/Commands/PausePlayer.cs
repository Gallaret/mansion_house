using Smart.House.Application.Commands;
using Smart.House.Application.Domain.Devices.Center.Providers.Video;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Smart.House.Services.Devices.Center.Handlers.Commands
{
    public class PausePlayer : IRequest
    {

    }

    public class PausePlayerHandler : IRequestHandler<PausePlayer>
    {
        private readonly IVideoPlayer _videoPlayer;

        public PausePlayerHandler(IVideoPlayer videoPlayer)
        {
            _videoPlayer = videoPlayer;
        }

        public async Task Handle(PausePlayer command)
        {
            await _videoPlayer.Pause();
        }
    }
}
