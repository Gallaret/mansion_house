using System;

namespace Smart.House.Domain.Entities
{
    public enum DeviceType
    {
        Camera = 0
    }

    public abstract class Device
    {
        protected readonly string Identifier;

        public Device(DeviceType type, string identifier)
        {
            if (identifier == null)
            {
                var rand = new Random();
                Identifier = type.ToString() + rand.Next();
            }

            Identifier = identifier;
        }

        public abstract string DeviceIdentifier  { get; } 

        public abstract bool IsActive { get; }
    }
}
