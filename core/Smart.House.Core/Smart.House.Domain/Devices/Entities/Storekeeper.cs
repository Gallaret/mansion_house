namespace Smart.House.Domain.Devices.Entities
{
    public enum StorageType
    {
        Local = 0,
        Ftp = 1
    }

    public class Storekeeper : Device
    {
        public Storekeeper() { }

        public Storekeeper(string identifier, StorageType storageType) 
            : base(identifier, GetProviderByStorageType(storageType), DeviceType.Storage)
        {
        }

        public StorageType GetStorageType()
        {
            switch (Provider.ToLower())
            {
                case "ftp":
                    return StorageType.Ftp;
                default:
                    return StorageType.Local;
            }
        }

        private static string GetProviderByStorageType(StorageType storageType)
        {
            switch (storageType)
            {
                case StorageType.Ftp:
                    return StorageType.Ftp.ToString().ToLower();
                default:
                    return StorageType.Local.ToString().ToLower();
            }
        }
    }
}
