using Smart.House.Domain.Devices.Entities;

namespace Smart.House.Application.Domain.Devices.Connector.Dtos
{
    public class Credential
    {
        public string Address { get; private set; }
        public string Login { get; private set; }
        public string Password { get; private set; }

        public Credential(Device device)
        {
            Address = device.Address;
            Login = device.Login;
            Password = device.Password;
        }
    }
}
