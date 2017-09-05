using Smart.House.Application.Repositories;
using Smart.House.Domain.Devices.Entities;
using Smart.House.EntityFramework.DataModel;

namespace Smart.House.EntityFramework.Repositories
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
