using Smart.House.EntityFramework.DataModel;
using System.Linq;
using Smart.House.Camera.Repositories;

namespace Smart.House.EntityFramework.Repositories
{
    public class CameraRepository : ICameraRepository
    {
        private readonly DataContext _context;

        public CameraRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Camera.Entities.Camera camera)
        {
            _context.Devices.Add(camera);
            _context.SaveChanges();
        }

        public Camera.Entities.Camera Get(string identifier)
        {
            var camera = _context.Devices.SingleOrDefault(c => c.Identifier == identifier);
            return camera as Camera.Entities.Camera;
        }
    }
}
