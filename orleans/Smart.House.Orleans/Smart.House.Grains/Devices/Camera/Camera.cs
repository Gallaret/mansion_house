﻿using Orleans;
using System.Threading.Tasks;
using Smart.House.Grains.Resolvers;
using Smart.House.Interface.Devices;
using System;
using Orleans.Runtime.Configuration;
using Smart.House.Interface.Notifications;

namespace Smart.House.Grains.Devices.Camera
{
    public class Camera : Grain<CameraState>, ICamera
    {
        private IDisposable stateWorker = null;

        private readonly Mediator _mediator;

        public Camera(Mediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<bool> Initialize(string identifier)
        {
            State = new CameraState(identifier);

            stateWorker = RegisterTimer(async (state) =>
            {
                State = await _mediator.Dispatch(State);

                await MotionDetection();

            }, State, TimeSpan.FromSeconds(5), TimeSpan.FromSeconds(30));

            return await Task.FromResult(true);
        }

        public async Task<CameraState> GetState()
        {
            return await Task.FromResult(State);
        }

        private async Task MotionDetection()
        {
            if (State.IsMotionDetected)
            {
                var client = await GetClient();

                IBroadcaster broadcaster = client.GetGrain<IBroadcaster>("broadcast");

                var notify = new Notify(State.Identifier,
                    State.CurrentMotionFileName, Event.Motion);

                await broadcaster.Broadcast(notify);
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