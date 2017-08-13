using Smart.House.Domain.Repositories;
using Smart.House.Domain.Entities.Camera;
using Smart.House.EntityFramework.DataModel;
using System.Linq;

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

        public Camera Get(string identifier)
        {
            var camera = _context.Cameras.SingleOrDefault(c => c.Identifier == identifier);
            return camera;
        }
    }
}
