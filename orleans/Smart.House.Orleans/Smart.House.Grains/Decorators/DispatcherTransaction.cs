using Smart.House.Application.Transaction;
using Smart.House.Interface;
using System.Threading.Tasks;

namespace Smart.House.Grains.Decorators
{
    public class DispatcherTransaction<TState> : IDispatcher<TState>
    {
        private readonly IDispatcher<TState> _service;
        private readonly IUnitOfWork _unitOfWork;

        public DispatcherTransaction(IDispatcher<TState> service,
            IUnitOfWork unitOfWork)
        {
            _service = service;
            _unitOfWork = unitOfWork;
        }

        public async Task<TState> Dispatch(TState state)
        {
            var newState = await _service.Dispatch(state);

            await _unitOfWork.SaveChangesAsync();

            return newState;
        }
    }
}
