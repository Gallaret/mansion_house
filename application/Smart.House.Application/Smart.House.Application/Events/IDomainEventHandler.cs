using Smart.House.Domain.Devices.Entities;
using System.Threading.Tasks;

namespace Smart.House.Application.Events
{
    public interface IDomainEventHandler<TEvent> where TEvent : IAsyncNotification
    {
        Task PublishAsync(TEvent @event);
    }
}
