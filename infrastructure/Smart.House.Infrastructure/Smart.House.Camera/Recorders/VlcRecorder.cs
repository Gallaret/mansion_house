using Smart.House.Application.Domain.Devices.Camera.Providers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Vlc.DotNet.Core;

namespace Smart.House.Camera.Recorders
{
    public class VlcRecorder : IRtspRecorder
    {
        private Dictionary<string, VlcMediaPlayer> _players = 
            new Dictionary<string, VlcMediaPlayer>();

        private string _libraryPath;

        public VlcRecorder(string libraryPath)
        {
            _libraryPath = libraryPath;
        }

        public async Task<bool> IsRecording(string recorderId)
        {
            if (_players.TryGetValue(recorderId, out VlcMediaPlayer player))
            {
                return await Task.FromResult(player.IsPlaying());
            }

            return await Task.FromResult(false);
        }

        public async Task Start(string recorderId, Uri uri, string param)
        {
            if (!_players.TryGetValue(recorderId, out VlcMediaPlayer player))
            {
                player = new VlcMediaPlayer(new DirectoryInfo(_libraryPath));
                _players.Add(recorderId, player);
            }

            if (player.IsPlaying())
                player.Stop();

            player.SetMedia(uri, param, ":sout-keep", ":run-time 10"); //last parameter useless just for test

            await Task.Run(() => player.Play());
        }

        public async Task Stop(string recorder)
        {
            if (_players.TryGetValue(recorder, out VlcMediaPlayer player))
            {
                if (player.IsPlaying())
                    await Task.Run(() => player.Stop());
            }
        }
    }
}
