using Smart.House.Domain.Notifications.ValueTypes;

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

        public Email GetEmail(string title, string receiverAddress)
        {
            return new Email(this, RemoteAddress, receiverAddress);
        }
    }
}
