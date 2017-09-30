using System.Threading.Tasks;
using Smart.House.Application.Domain.Devices.Notificator.Dtos;

namespace Smart.House.Application.Domain.Devices.Notificator.Providers
{
    public interface IMessageProvider
    {
        Task Send(Message message);
    }
}
