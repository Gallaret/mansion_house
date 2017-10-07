using Smart.House.Application.Domain.Devices.Camera.Providers;
using System;
using Smart.House.Application.Domain.Devices.Camera.Dtos;
using System.Threading.Tasks;
using Smart.House.Recorder.Player;
using System.Net.Http;

namespace Smart.House.Recorder.Providers
{
    public class RtspRecorder : IRecordingProvider
    {
        private const string LIBRARIES_DIRECTORY = @"C:\Program Files\VideoLAN\VLC";
        private readonly RtspPlayer _player;

        public RtspRecorder()
        {
            if (_player == null)
                _player = new RtspPlayer(LIBRARIES_DIRECTORY);
        }

        public async Task Start(string recorderPath, RecordingStream stream)
        {
            var kodi = new KodiPlayer();

            await kodi.Play("Player.Open");

            var param = @":sout=#transcode{vcodec=h264,acodec=mpga,ab=128,channels=2,samplerate=44100}:file{dst=C:\\video\\myfile.mp4,no-overwrite}";
            var param = @":sout=#transcode{vcodec = h264,vb = 3500,scale = Automatycznie,width = 1920,height = 1080,acodec = mp4a,ab = 192,channels = 2,samplerate = 44100}:file{dst=C:\\video\\myfile.mp4,no-overwrite}";
            var uri = new Uri("rtsp://admin:Uncharted4@192.168.0.234/play2.sdp");

            //await Task.Run(() => _player.Play(stream.Recorder, uri, param));
        }

        public async Task Stop(string recorder)
        {
            //await Task.Run(() => _player.Stop(recorder));
        }
    }
}
