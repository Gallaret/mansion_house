using Smart.House.Domain.Devices.Entities;

namespace Smart.House.Domain.Devices.ValueTypes
{
    public class ConnectionSettings
    {
        public StorageType StorageType { get; set; }    
        public string Address { get; set; }
        public string Path { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
