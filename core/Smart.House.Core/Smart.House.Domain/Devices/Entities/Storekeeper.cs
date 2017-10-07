namespace Smart.House.Domain.Devices.Entities
{
    public enum StorageType
    {
        Local = 0,
        Ftp = 1
    }

    public class Storekeeper : Device
    {
        public StorageType StorageType { get; private set; }

        public Storekeeper() { }

        public Storekeeper(string identifier, StorageType storageType) 
            : base(identifier, GetProviderByStorageType(storageType), DeviceType.Storage)
        {
            StorageType = storageType;
        }

        public void SetStorageType(StorageType storageType)
        {
            StorageType = storageType;
        }

        private static string GetProviderByStorageType(StorageType storageType)
        {
            switch (storageType)
            {
                case StorageType.Ftp:
                    return StorageType.Ftp.ToString();
                default:
                    return StorageType.Local.ToString();
            }
        }
    }
}
