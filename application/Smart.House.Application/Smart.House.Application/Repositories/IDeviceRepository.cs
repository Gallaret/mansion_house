using Smart.House.Domain.Devices.Entities;
using System.Threading.Tasks;

namespace Smart.House.Application.Repositories
{
    public interface IDeviceRepository<T> where T: Device
    {
        Task<T> GetAsync(string identifier);
        void Add(T device);
    }
}
