using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices.Storekeeper.Repositories
{
    using Storekeeper = House.Domain.Devices.Entities.Storekeeper;

    public interface IStorekeeperRepository
    {
        Storekeeper GetByProvider(string provider);
    }
}
