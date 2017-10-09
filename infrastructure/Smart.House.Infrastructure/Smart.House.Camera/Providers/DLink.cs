using System;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
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
        private readonly IRtspRecorder _recordingProvider;

        public DLink(IFtpProvider ftpProvider,
            IRtspRecorder recordingProvider)
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

        public async Task StopRecording(string recorder)
        {
            await _recordingProvider.Stop(recorder);
        }

        public async Task<bool> IsRecording(string recorder)
        {
            return await _recordingProvider.IsRecording(recorder);
        }

        public async Task StartRecording(RecordingStream stream)
        {
            if (!Directory.Exists(RECORDING_DIRECTORY))
                Directory.CreateDirectory(RECORDING_DIRECTORY);

            var param = @":sout=#transcode{vcodec = h264,vb = 3500,scale = Automatycznie,width = 1920,height = 1080,acodec = mp4a,ab = 192,channels = 2,samplerate = 44100}:file{dst=C:\\video\\myfile.mp4,no-overwrite}";
            var uri = new Uri("rtsp://admin:Uncharted4@192.168.0.234/play2.sdp");

            await _recordingProvider.Start(stream.Recorder, uri, param);
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
