using Smart.House.Application.States;
using System.Threading.Tasks;

namespace Smart.House.Application.Commands
{
    public interface IRequest
    {
    }

    public interface IRequestHandler<in TCommand, TState> 
        where TState : IDeviceState
        where TCommand : IRequest
    {
        Task<TState> Handle(TCommand command);
    }
}
