using Smart.House.Domain.Devices.Entities;

namespace Smart.House.Application.Dtos.Connection
{
    public class Credential
    {
        public string Address { get; private set; }
        public string Login { get; private set; }
        public string Password { get; private set; }

        public Credential(Device device)
        {
            Address = device.RemoteAddress;
            Login = device.RemoteLogin;
            Password = device.RemotePassword;
        }
    }
}
