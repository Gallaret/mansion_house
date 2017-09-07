using Smart.House.Application.Repositories;
using Smart.House.Data.Model;
using Smart.House.Domain.Devices.Entities;

namespace Smart.House.Data.Repositories
{
    public class CameraRepository : DeviceRepository<Camera>, ICameraRepository
    {
        private readonly DataContext _context;

        public CameraRepository(DataContext context)
            : base(context)
        {
            _context = context;
        }
    }
}
