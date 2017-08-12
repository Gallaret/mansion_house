using System;

namespace Smart.House.Domain.Entities
{
    public enum DeviceType
    {
        Camera = 0
    }

    public abstract class Device
    {
        protected readonly string DeviceIdentifier;

        public Device(DeviceType type, string identifier)
        {
            if (identifier == null)
            {
                var rand = new Random();
                DeviceIdentifier = type.ToString() + rand.Next();
            }

            DeviceIdentifier = identifier;
        }

        public abstract bool IsActive { get; }
    }
}
