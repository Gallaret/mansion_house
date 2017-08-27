using Smart.House.Application.Commands;
using Smart.House.Application.States;
using Smart.House.Application.Transaction;
using System.Threading.Tasks;

namespace Smart.House.Application.Decorators
{
    public class TransactionRequestDecorator<TCommand, TState> : IRequestHandler<TCommand, TState>
        where TState : IDeviceState
        where TCommand : IRequest
    {
        private readonly IRequestHandler<TCommand, TState> _request;
        private readonly IUnitOfWork _unitOfWork;

        public TransactionRequestDecorator(IRequestHandler<TCommand, TState> request,
            IUnitOfWork unitOfWork)
        {
            _request = request;
            _unitOfWork = unitOfWork;
        }

        public async Task<TState> Handle(TCommand command)
        {
            var state = await _request.Handle(command);
            await _unitOfWork.SaveChangesAsync();

            return state;
        }
    }
}
