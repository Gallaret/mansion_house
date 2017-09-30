using System;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using System.Threading;
using Vlc.DotNet.Core;
using Smart.House.Application.Domain.Devices.Camera.Providers;
using Smart.House.Application.Domain.Devices.Connector.Providers;
using Smart.House.Application.Domain.Devices.Camera.Dtos;
using Smart.House.Application.Domain.Devices.Storekeeper.Dtos;

namespace Smart.House.Camera
{
    public class DLink : ICameraProvider
    {
        private const string MOTION_DIRECTORY = "/Motion";
        private const string RECORDING_DIRECTORY = "/Recording";

        private readonly IFtpProvider _ftpProvider;
        private readonly IRecordingProvider _recordingProvider;

        public DLink(IFtpProvider ftpProvider,
            IRecordingProvider recordingProvider)
        {
            _recordingProvider = recordingProvider;
            _ftpProvider = ftpProvider;
        }

        public async Task<Motion> DetectMotion(Storage storage)
        {
            var files = GetFiles(storage);
            var lastFile = files.OrderByDescending(file => file.CreationTime)
                .FirstOrDefault();

            if (lastFile != null && !lastFile.FileName.Equals(storage.FileName))
            {
                return await Task.FromResult(
                    new Motion(true, lastFile.FileName));
            }

            return await Task.FromResult(
                    new Motion(false, storage.FileName));
        }

        public void StopRecording()
        {
            _recordingProvider.Stop("");
        }

        public void StartRecording(RecordingStream stream)
        {
            VlcMediaPlayer vlc = new VlcMediaPlayer(new DirectoryInfo(@"C:\Program Files\VideoLAN\VLC"));
            //var path = Path.Combine(Environment.CurrentDirectory, "recording", "video.m4v");
            var param = @":sout=#transcode{vcodec=h264,acodec=mpga,ab=128,channels=2,samplerate=44100}:file{dst=C:\\video\\myfile.mp4,no-overwrite}";
            var second = ":sout-keep";
            var endOfParam = ":run-time 10";
            vlc.SetMedia(new Uri("rtsp://admin:Uncharted4@192.168.0.234/play2.sdp"), param, second, endOfParam);

            try
            {
                vlc.Play();
                Thread.Sleep(15000);               
            }
            catch(Exception exc)
            {

            }
            finally
            {
                vlc.Stop();
                //vlc.Dispose();
            }                   
        }

        private RemoteFile [] GetFiles(Storage settings)
        {
            using (var connection = _ftpProvider.Connect(settings.Credential))
            {
                if (!connection.DirectoryExists(MOTION_DIRECTORY))
                    throw new DirectoryNotFoundException(settings.Path);

                var motionPath = CreateMotionFilePath(MOTION_DIRECTORY);

                return connection.ScanFiles(motionPath);
            }
        }

        private static string CreateMotionFilePath(string motionPath)
        {
            var now = DateTime.Now;
            var catalog = now.ToString("yyyyMMdd");
            var subcatalog = new TimeSpan(now.Hour, now.Minute,
                now.Second).ToString("hh");

            return $"{motionPath}/{catalog}/{subcatalog}";
        }
    }
}
