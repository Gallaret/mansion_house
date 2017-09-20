using Smart.House.Application.Commands;
using Smart.House.Application.Transaction;
using System.Threading.Tasks;

namespace Smart.House.Grains.Decorators
{
    public class TransactionRequestDecorator<TCommand> : IRequestHandler<TCommand>
        where TCommand : IRequest
    {
        private readonly IRequestHandler<TCommand> _request;
        private readonly IUnitOfWork _unitOfWork;

        public TransactionRequestDecorator(IRequestHandler<TCommand> request,
            IUnitOfWork unitOfWork)
        {
            _request = request;
            _unitOfWork = unitOfWork;
        }

        public async Task Handle(TCommand command)
        {
            await _request.Handle(command);

            await _unitOfWork.SaveChangesAsync();
        }
    }
}
