using Smart.House.Application.Dtos.Connection;
using System.Threading.Tasks;

namespace Smart.House.Application.Providers.Ambilight
{
    public interface IAmbilightProvider
    {
        Task RunAlarm(Credential crendential);
    }
}
