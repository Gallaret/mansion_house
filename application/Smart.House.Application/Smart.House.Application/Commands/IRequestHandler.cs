using System.Threading.Tasks;

namespace Smart.House.Application.Commands
{
    public interface IRequest { }

    public interface IRequestHandler<in TCommand>
        where TCommand : IRequest
    {
        Task Handle(TCommand command);
    }

    public interface IRequestHandler<in TQuery, TResult> 
        where TQuery : IRequest
    {
        Task<TResult> Handle(TQuery command);
    }
}
