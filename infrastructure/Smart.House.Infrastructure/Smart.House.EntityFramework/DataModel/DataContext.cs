using Microsoft.EntityFrameworkCore;
using Smart.House.Domain.Entities;


namespace Smart.House.EntityFramework.DataModel
{
    public class DataContext : DbContext
    {
        public DbSet<Device> Devices { get; set; }
        public DbSet<Harmonogram> Harmonograms { get; set; }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            BuildCameraModel(modelBuilder);

            modelBuilder.Entity<Harmonogram>().HasKey(har => new { har.Identifier, har.Type });
            modelBuilder.Entity<Harmonogram>()
               .HasOne(h => h.Device)
               .WithMany(b => b.Harmonograms)
               .HasForeignKey(d => d.Identifier)
               .HasConstraintName("ForeignKey_Harmonogram_Device");
        }

        private void BuildCameraModel(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Device>()
                .HasDiscriminator<string>("device_type")
                .HasValue<Device>("device_base")
                .HasValue<Camera.Entities.Camera>("device_camera");
            modelBuilder.Entity<Device>()
                .HasKey(dev => dev.Identifier);

            modelBuilder.Entity<Camera.Entities.Camera>().Ignore(cam => cam.IsMotionDetected);
            modelBuilder.Entity<Camera.Entities.Camera>().Ignore(cam => cam.Notifications);
            modelBuilder.Entity<Camera.Entities.Camera>().Ignore(cam => cam.IsActive);
        }

        public override void Dispose()
        {
            base.SaveChanges();
            base.Dispose();
        }
    }
}
