using System;
using System.Collections.Generic;

namespace Smart.House.Domain.Entities
{
    public enum DeviceType
    {
        Camera = 0
    }

    public interface IAsyncNotification { }

    public abstract class AggregateRoot<T>
    {
        public abstract string Identifier { get; }

        private List<IAsyncNotification> _domainEvents;

        public List<IAsyncNotification> DomainEvents => _domainEvents 
            ?? new List<IAsyncNotification>();

        public void AddDomainEvent(IAsyncNotification eventItem)
        {
            _domainEvents = _domainEvents ?? new List<IAsyncNotification>();
            _domainEvents.Add(eventItem);
        }

        public void RemoveDomainEvent(IAsyncNotification eventItem)
        {
            if (_domainEvents is null) return;
            _domainEvents.Remove(eventItem);
        }
    }

    public abstract class Device : AggregateRoot<string>
    {
        private string _identifier;

        public override string Identifier
        {
            get
            {
                return _identifier;
            }

        }

        public string Producent { get; private set; }
        public bool AmbientNotificationEnabled { get; protected set; }
        public bool SoundNotificationEnabled { get; protected set; }
        public bool EmailNotificationEnabled { get; protected set; }
        public bool SmsNotificationEnabled { get; protected set; }
        public List<Harmonogram> Harmonograms { get; private set; }

        public Device() { }

        public Device(int id, string producent, DeviceType type)
        {
            _identifier = type.ToString().ToLower() + id;
            Producent = producent;
            Harmonograms = new List<Harmonogram>();
        }

        public void AddHarmonogram(Harmonogram harmonogram)
        {
            if (string.IsNullOrEmpty(harmonogram.Identifier))
            {
                throw new ArgumentNullException(nameof(harmonogram.Identifier));
            }

            Harmonograms.Add(harmonogram);
        }

        public abstract bool IsActive { get; }
    }
}
