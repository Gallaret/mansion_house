using System.Collections.Generic;

namespace Smart.House.Core
{
    public abstract class AggregateRoot<T> 
    {
        public abstract string Identifier { get; }

        private List<IAsyncEvent<T>> _domainEvents;

        public List<IAsyncEvent<T>> DomainEvents => _domainEvents
            ?? new List<IAsyncEvent<T>>();

        public void AddDomainEvent(IAsyncEvent<T> eventItem)
        {
            _domainEvents = _domainEvents ?? new List<IAsyncEvent<T>>();
            _domainEvents.Add(eventItem);
        }

        public void RemoveDomainEvent(IAsyncEvent<T> eventItem)
        {
            if (_domainEvents is null) return;
            _domainEvents.Remove(eventItem);
        }
    }
}
