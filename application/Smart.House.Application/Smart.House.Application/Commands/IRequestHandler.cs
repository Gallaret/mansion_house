using Smart.House.Application.Services.States;
using System.Threading.Tasks;

namespace Smart.House.Application.Commands
{
    public interface IRequest { }

    public interface IRequestHandler<in TCommand>
        where TCommand : IRequest
    {
        Task Handle(TCommand command);
    }

    public interface IRequestHandler<in TCommand, TState> 
        where TState : IDeviceState
        where TCommand : IRequest
    {
        Task<TState> Handle(TCommand command);
    }
}
