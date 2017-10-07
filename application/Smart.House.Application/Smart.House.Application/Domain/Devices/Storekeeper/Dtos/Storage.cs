using Smart.House.Application.Domain.Devices.Connector.Dtos;
using Smart.House.Domain.Devices.Entities;

namespace Smart.House.Application.Domain.Devices.Storekeeper.Dtos
{
    using Storekeeper = House.Domain.Devices.Entities.Storekeeper;

    public class Storage
    {
        private readonly Storekeeper _storage; //need to be storage

        public string Path { get; private set; }
        public string FileName { get; private set; }
        public Credential Credential => new Credential(_storage);

        public Storage(Storekeeper storage, string fileName)
        {
            _storage = storage;

            FileName = fileName;
            Path = _storage.Path;
        }
    }
}
