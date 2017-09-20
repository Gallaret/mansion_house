using Smart.House.Application.Mediator;
using System.Collections.Generic;
using SimpleInjector;
using Smart.House.Application.Events;
using Smart.House.Application.Commands;
using System.Threading.Tasks;
using Smart.House.Domain.Devices.Entities;
using SimpleInjector.Lifestyles;
using Smart.House.Interface;

namespace Smart.House.Grains.Resolvers
{
    public class Mediator : IMediator
    {
        private Container _provider;

        public Mediator(Container serviceProvider)
        {
            _provider = serviceProvider;
        }

        public async Task DispatchDomainEvents(IEnumerable<Device> domainEntities)
        {
            var tasks = new List<Task>();
            foreach (var entity in domainEntities)
            {
                entity.DomainEvents.ForEach(@event => 
                {
                    tasks.Add(Task.Run(() => PublishEvent(@event)));
                });
            }

            await Task.WhenAll(tasks);
        }

        public async Task<TState> Dispatch<TState>(TState state)
        {
            using (AsyncScopedLifestyle.BeginScope(_provider))
            {
                var instance = _provider.GetInstance<IDispatcher<TState>>();
                return await instance.Dispatch(state);
            }
        }

        public async Task DispatchRequest<TCommand>(TCommand request)
            where TCommand : IRequest
        {
            using (AsyncScopedLifestyle.BeginScope(_provider))
            {
                var instance = _provider.GetInstance<IRequestHandler<TCommand>>();
                await instance.Handle(request);
            }
        }

        public async Task<TResult> DispatchRequest<TQuery, TResult>(TQuery request) 
            where TQuery : IRequest
        {
            using (AsyncScopedLifestyle.BeginScope(_provider))
            {
                var instance = _provider.GetInstance<IRequestHandler<TQuery, TResult>>();
                return await instance.Handle(request);
            }
        }

        private async Task PublishEvent<TEvent>(TEvent @event)
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
