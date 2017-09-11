using Smart.House.Application.Providers.Ftp;
using System.Threading.Tasks;

namespace Smart.House.Application.Providers.Ambilight
{
    public interface IAmbilightProvider
    {
        Task RunAlarm(RemoteCredentials credentials);
    }
}
