using Smart.House.Application.Repositories;
using Smart.House.Domain.Devices.Entities;
using Smart.House.EntityFramework.DataModel;
using System.Threading.Tasks;

namespace Smart.House.EntityFramework.Repositories
{
    public class DeviceRepository<T> : IDeviceRepository<T>
        where T: Device
    {
        private readonly DataContext _context;

        public DeviceRepository(DataContext context)
        {
            _context = context;
        }

        public async void Add(T device)
        {
            await _context.AddAsync<Device>(device);
        }

        public async Task<T> GetAsync(string identifier)
        {
            return await _context.FindAsync<Device>(identifier) as T;
        }
    }
}
