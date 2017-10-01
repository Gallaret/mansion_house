using Microsoft.EntityFrameworkCore;
using Smart.House.Application.Domain.Devices;
using Smart.House.Data.Model;
using Smart.House.Domain.Devices.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace Smart.House.Data.Repositories
{
    public class DeviceRepository<T> : IDeviceRepository<T>
        where T: Device
    {
        protected readonly DataContext _context;

        public DeviceRepository(DataContext context)
        {
            _context = context;
        }

        public async void Add(T device)
        {
            await _context.AddAsync<Device>(device);
        }

        public T Find(string key)
        {
            var device = _context.Devices
                .SingleOrDefault(k => k.Identifier == key);
            return device as T;
        }

        public async Task<T> FindAsync(string key)
        {
            return await _context.Devices.FindAsync(key) as T;
        }

        public async Task<T> GetAsync(string identifier)
        {
            return await _context.Devices.Include(dev => dev.Harmonograms)
                .SingleOrDefaultAsync(dev => dev.Identifier == identifier) as T;
        }
    }
}
