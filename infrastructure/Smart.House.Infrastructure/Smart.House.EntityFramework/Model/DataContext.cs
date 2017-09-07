using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart.House.Application.Mediator;
using Smart.House.Application.Transaction;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Domain.Devices.ValueTypes;
using Smart.House.Domain.Notifications.ValueTypes;
using System.Linq;
using System.Threading.Tasks;

namespace Smart.House.Data.Model
{
    public class DataContext : DbContext, IUnitOfWork
    {
        private readonly IMediator _mediator;

        public DbSet<Device> Devices { get; set; }
        public DbSet<Harmonogram> Harmonograms { get; set; }
        public DbSet<Notification> Notifications { get; set; }

        public DataContext(DbContextOptions<DataContext> options, IMediator mediator)
            : base(options)
        {
            _mediator = mediator;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            BuildCameraModel(modelBuilder);
            BuildNotificationModel(modelBuilder.Entity<Notification>());

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
                .HasValue<Camera>("device_camera");
            modelBuilder.Entity<Device>()
                .HasKey(dev => dev.Identifier);
            modelBuilder.Entity<Device>()
                .Ignore(dev => dev.DomainEvents);

            modelBuilder.Entity<Camera>().Ignore(cam => cam.IsMotionDetected);
            modelBuilder.Entity<Camera>().Ignore(cam => cam.IsActive);
        }

        private void BuildNotificationModel(EntityTypeBuilder<Notification> notificationConfiguration)
        {
            notificationConfiguration.Property<int>("Id").IsRequired().ForSqlServerUseSequenceHiLo();
            notificationConfiguration.HasKey("Id");
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
