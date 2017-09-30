using System.Threading.Tasks;

namespace Smart.House.Application.Domain.Devices.Camera.Repositories
{
    using Camera = House.Domain.Devices.Entities.Camera;

    public interface ICameraRepository
    {
        Task<Camera> GetAsync(string identifier);
        Task<Camera> FindAsync(string identifier);
    }
}
