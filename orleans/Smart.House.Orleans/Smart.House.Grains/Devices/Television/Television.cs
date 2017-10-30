using Orleans;
using Smart.House.Grains.Resolvers;
using Smart.House.Interface.Devices;
using Smart.House.Services.Devices.Center.Handlers.Commands;
using System.Threading.Tasks;

namespace Smart.House.Grains.Devices.Television
{
    public class Television : Grain, ITelevision
    {
        private readonly Mediator _mediator;

        public Television(Mediator mediator)
        {
            _mediator = mediator;
        }

        public async Task SetFireplace()
        {
            var start = new StartPlaying();
            await _mediator.DispatchRequest(start);
        }

        public async Task SetVideo()
        {
            var start = new StartPlaying { VideoId = 1 };
            await _mediator.DispatchRequest(start);
        }
    }
}
