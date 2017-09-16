using Smart.House.Application.Services;
using Smart.House.Application.Services.States;
using Smart.House.Application.Transaction;
using System.Threading.Tasks;

namespace Smart.House.Application.Decorators
{
    public class TransactionStateDecorator<TState> : IStateService<TState>
        where TState: IDeviceState
    {
        private readonly IStateService<TState> _service;
        private readonly IUnitOfWork _unitOfWork;

        public TransactionStateDecorator(IStateService<TState> service,
            IUnitOfWork unitOfWork)
        {
            _service = service;
            _unitOfWork = unitOfWork;
        }

        public async Task<TState> GetNewState(TState state)
        {
            var newState = await _service.GetNewState(state);

            _unitOfWork.SaveChanges();

            return newState;
        }
    }
}
