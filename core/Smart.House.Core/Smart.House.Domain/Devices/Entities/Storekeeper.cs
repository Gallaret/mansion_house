namespace Smart.House.Domain.Devices.Entities
{
    public class Storekeeper : Device
    {
        public Storekeeper() { }

        public Storekeeper(string identifier, string provider) 
            : base(identifier, provider, DeviceType.Storekeeer)
        {

        }
    }
}
