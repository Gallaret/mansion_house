using System.Threading.Tasks;

namespace Smart.House.Application.Events
{
    public interface IDomainEventHandler<TEvent>
    {
        Task PublishAsync(TEvent @event);
    }
}
