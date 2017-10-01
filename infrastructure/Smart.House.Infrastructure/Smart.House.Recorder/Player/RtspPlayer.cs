using System;
using System.Collections.Generic;
using System.IO;
using Vlc.DotNet.Core;

namespace Smart.House.Recorder.Player
{
    public class RtspPlayer
    {
        private readonly string _libraryPath;

        private Dictionary<string, VlcMediaPlayer> players 
            = new Dictionary<string, VlcMediaPlayer>();

        public RtspPlayer(string libraryPath)
        {
            _libraryPath = libraryPath;
        }

        public void Play(string recorder, Uri uri, string param)
        {
            if (!players.TryGetValue(recorder, out VlcMediaPlayer player))
            {
                player = new VlcMediaPlayer(new DirectoryInfo(_libraryPath));
                players.Add(recorder, player);
            }

            if (player.IsPlaying())
                player.Stop();

            player.SetMedia(uri, param, ":sout-keep", ":run-time 10"); //last parameter useless just for test

            player.Play();
        }

        public void Stop(string recorder)
        {
            if (players.TryGetValue(recorder, out VlcMediaPlayer player))
            {
                if(player.IsPlaying())
                    player.Stop();
            }
        }
    }
}
