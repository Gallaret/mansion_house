using Smart.House.Domain.Repositories;
using Smart.House.Domain.Entities.Camera;
using Smart.House.EntityFramework.DataModel;

namespace Smart.House.EntityFramework.Repositories
{
    public class CameraRepository : ICameraRepository
    {
        private readonly DataContext _context;

        public CameraRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Camera camera)
        {
            _context.Cameras.Add(camera);
            _context.SaveChanges();
        }
    }
}
