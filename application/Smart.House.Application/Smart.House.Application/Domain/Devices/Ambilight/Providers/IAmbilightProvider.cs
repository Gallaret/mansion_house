using Smart.House.Application.Domain.Devices.Connector.Dtos;
using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices.Ambilight.Providers
{
    public interface IAmbilightProvider
    {
        Task RunAlarm(Credential crendential);
    }
}
