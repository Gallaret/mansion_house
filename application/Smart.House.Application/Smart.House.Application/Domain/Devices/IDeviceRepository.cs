using Smart.House.Domain.Devices.Entities;
using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices
{
    public interface IDeviceRepository<T> where T: Device
    {
        Task<T> GetAsync(string identifier);

        T Find(string key);

        Task<T> FindAsync(string key);

        void Add(T device);
    }
}
