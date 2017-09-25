namespace Smart.House.Domain.Devices.Entities
{
    public class Notificator : Device
    {
        public Notificator() { }

        public Notificator(string identifier)
            : base(identifier, null, DeviceType.Notificator) { }

        public int Limit { get; private set; }
        public string Receiver { get; private set; }
        public string MobileProvider { get; private set; }
    }
}
