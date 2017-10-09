using System;
using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices.Camera.Providers
{
    public interface IRtspRecorder
    {
        Task Start(string recorderId, Uri uri, string param);
        Task Stop(string recorderId);
        Task<bool> IsRecording(string recorderId);
    }
}
