﻿using Smart.House.Application.Mediator;
using System.Collections.Generic;
using SimpleInjector;
using Smart.House.Application.Events;
using Smart.House.Application.Commands;
using System.Threading.Tasks;
using Smart.House.Domain.Devices.Entities;
using System;

namespace Smart.House.Dashboard.Resolvers
{

    public class Mediator : IMediator, IDisposable
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

        public async Task DispatchRequest<TCommand>(TCommand request)
            where TCommand : IRequest
        {
            var instance = _provider.GetInstance<IRequestHandler<TCommand>>();
            await instance.Handle(request);
        }

        public async Task<TResult> DispatchRequest<TQuery, TResult>(TQuery request) 
            where TQuery : IRequest
        {
            var instance = _provider.GetInstance<IRequestHandler<TQuery, TResult>>();
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

        public void Dispose()
        {
            
        }
    }
}
