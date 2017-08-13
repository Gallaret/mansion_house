using Microsoft.EntityFrameworkCore;
using Smart.House.Domain.Entities.Camera;


namespace Smart.House.EntityFramework.DataModel
{
    public class DataContext : DbContext
    {
        public DbSet<Camera> Cameras { get; set; }


        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            BuildCameraModel(modelBuilder);
        }

        private void BuildCameraModel(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Camera>().HasKey(cam => cam.Identifier);
            modelBuilder.Entity<Camera>().Ignore(cam => cam.Notifications);
            modelBuilder.Entity<Camera>().Ignore(cam => cam.LastDetectedMotionFileName);
            modelBuilder.Entity<Camera>().Ignore(cam => cam.IsMotionDetected);
            modelBuilder.Entity<Camera>().Ignore(cam => cam.IsActive);
        }

        public override void Dispose()
        {
            base.Dispose();
        }
    }
}
