namespace Smart.House.Domain.Devices.Entities
{
    public class Ambilight : Device
    {
        public Ambilight() { }

        public Ambilight(string identifier, string provider) 
            : base(identifier, provider, DeviceType.Ambilight)
        {

        }
    }
}
