using Smart.House.Application.Commands;
using Smart.House.Domain.Devices.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Smart.House.Application.Mediator
{
    public interface IMediator
    {
        void DispatchDomainEvents(IEnumerable<Device> domainEntities);

        Task DispatchRequest<TCommand>(TCommand request)
            where TCommand : IRequest;

        Task<TResult> DispatchRequest<TQuery, TResult>(TQuery request)
            where TQuery : IRequest;
    }
}
