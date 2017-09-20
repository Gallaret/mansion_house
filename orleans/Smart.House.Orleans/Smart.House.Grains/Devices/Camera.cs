using Orleans;
using Smart.House.Interface;
using System.Threading.Tasks;
using Smart.House.Grains.Resolvers;
using Smart.House.Interface.Devices;
using System;
using Orleans.Runtime.Configuration;
using Smart.House.Interface.Devices.States;

namespace Smart.House.Grains
{
    public class Camera : Grain<CameraState>, ICamera
    {
        private IDisposable stateWorker = null;

        private readonly Mediator _mediator;

        public Camera(Mediator mediator)
        {
            _mediator = mediator;
        }

        public async Task Initialize(string identifier)
        {
            State.Identifier = identifier;

            stateWorker = RegisterTimer((state) => UpdateState(),
                State, TimeSpan.FromSeconds(5), TimeSpan.FromSeconds(5));
        }

        public async Task<CameraState> GetState()
        {
            return await Task.FromResult(State);
        }

        private async Task UpdateState()
        {
            var oldState = new CameraState(State);
            State = await _mediator.Dispatch(State);

            await MotionDetection(oldState);
        }

        private async Task MotionDetection(CameraState state)
        {
            if (State.IsMotionDetected)
            {
                var client = await GetClient();

                IBroadcaster broadcaster = client.GetGrain<IBroadcaster>("broadcast");

                await broadcaster.Broadcast(State.Identifier,
                    Event.Motion, State.CurrentMotionFileName);
            }
        }

        private async Task<IClusterClient> GetClient()
        {
            var config = ClientConfiguration.LocalhostSilo();
            var client = new ClientBuilder().UseConfiguration(config).Build();

            await client.Connect();

            return client;
        }
    }
}
