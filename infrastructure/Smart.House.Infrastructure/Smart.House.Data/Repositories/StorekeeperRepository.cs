using Smart.House.Application.Domain.Devices.Storekeeper.Repositories;
using Smart.House.Data.Model;
using Smart.House.Domain.Devices.Entities;
using System.Linq;

namespace Smart.House.Data.Repositories
{
    public class StorekeeperRepository : DeviceRepository<Storekeeper>, IStorekeeperRepository
    {
        public StorekeeperRepository(DataContext context) : base(context) { }

        public Storekeeper GetByProvider(string provider)
        {
            return _context.Storekeepers.SingleOrDefault(
                store => store.Provider.Equals(provider));
        }
    }
}
