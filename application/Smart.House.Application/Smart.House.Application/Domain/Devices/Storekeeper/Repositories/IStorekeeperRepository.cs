using Smart.House.Domain.Devices.Entities;

namespace Smart.House.Application.Domain.Devices.Storekeeper.Repositories
{
    using Storekeeper = House.Domain.Devices.Entities.Storekeeper;

    public interface IStorekeeperRepository
    {
        Storekeeper GetByType(StorageType storageType);
    }
}
