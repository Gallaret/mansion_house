using Smart.House.Application.Commands;
using Smart.House.Application.States;
using Smart.House.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Smart.House.Application.Mediator
{
    public interface IMediator
    {
        void DispatchDomainEvents(IEnumerable<Device> domainEntities);

        Task<TState> DispatchRequest<TCommand, TState>(TCommand request) 
            where TCommand : IRequest
            where TState : IDeviceState;
    }
}
