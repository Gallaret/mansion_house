using Microsoft.EntityFrameworkCore;
using Smart.House.Application.Mediator;
using Smart.House.Application.Transaction;
using Smart.House.Domain.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace Smart.House.EntityFramework.DataModel
{
    public class DataContext : DbContext, IUnitOfWork
    {
        private readonly IMediator _mediator;

        public DbSet<Device> Devices { get; set; }
        public DbSet<Harmonogram> Harmonograms { get; set; }

        public DataContext(DbContextOptions<DataContext> options, IMediator mediator)
            : base(options)
        {
            _mediator = mediator;
        }

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
            modelBuilder.Entity<Device>()
                .Ignore(dev => dev.DomainEvents);

            modelBuilder.Entity<Camera.Entities.Camera>().Ignore(cam => cam.IsMotionDetected);
            modelBuilder.Entity<Camera.Entities.Camera>().Ignore(cam => cam.IsActive);
        }

        public async Task<int> SaveChangesAsync()
        {
            var domainEventEntities = ChangeTracker.Entries<Device>()
                .Select(po => po.Entity)
                .Where(po => po.DomainEvents.Any())
                .ToArray();

            if(_mediator != null)
                _mediator.DispatchDomainEvents(domainEventEntities);

            return await base.SaveChangesAsync();
        }
    }
}
