using Smart.House.Application.Domain.Devices.Camera.Factories;
using Smart.House.Application.Domain.Devices.Camera.Providers;
using Smart.House.Recorder.Providers;
using System;
using System.Collections.Generic;

namespace Smart.House.Recorder
{
    public class RecorderProviderFactory : Dictionary<string, Func<IRecordingProvider>>, IRecordingProviderFactory
    {
        public IRecordingProvider Create(string provider) => Count > 0
            ? this[provider]() : Initialize()[provider]();

        private Dictionary<string, Func<IRecordingProvider>> Initialize()
        {
            return new Dictionary<string, Func<IRecordingProvider>>
            {
                { "rtsp", () => new RtspRecorder() },
            };
        }
    }
}
