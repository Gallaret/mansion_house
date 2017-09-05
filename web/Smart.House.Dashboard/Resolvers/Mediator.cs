using Smart.House.Application.Mediator;
using System.Collections.Generic;
using SimpleInjector;
using Smart.House.Application.Events;
using Smart.House.Application.Commands;
using System.Threading.Tasks;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Application.Services.States;

namespace Smart.House.Dashboard.Resolvers
{
    public class Mediator : IMediator
    {
        private Container _provider;

        public Mediator(Container serviceProvider)
        {
            _provider = serviceProvider;
        }

        public void DispatchDomainEvents(IEnumerable<Device> domainEntities)
        {
            foreach (var entity in domainEntities)
            {
                entity.DomainEvents.ForEach(@event => 
                {
                    PublishEvent(@event);
                });
            }

        }

        public async Task<TState> DispatchRequest<TCommand, TState>(TCommand request)
            where TCommand : IRequest
            where TState : IDeviceState
        {
            var instance = _provider.GetInstance<IRequestHandler<TCommand, TState>>();
            return await instance.Handle(request);
        }

        private async void PublishEvent<TEvent>(TEvent @event)
        {
            var handlerTypes = typeof(IDomainEventHandler<>).MakeGenericType(@event.GetType());
            var instances = _provider.GetAllInstances(handlerTypes);

            foreach (dynamic instance in instances)
            {
                await instance.PublishAsync((dynamic)@event);
            }
        }
    }
}
