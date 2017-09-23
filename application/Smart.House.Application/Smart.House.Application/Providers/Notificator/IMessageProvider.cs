using System.Threading.Tasks;
using Smart.House.Application.Dtos.Notificator;

namespace Smart.House.Application.Providers.Notificator
{
    public interface IMessageProvider
    {
        Task Send(Message message);
    }
}
