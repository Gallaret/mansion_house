using Microsoft.EntityFrameworkCore;
using SimpleInjector;
using SimpleInjector.Lifestyles;
using Smart.House.Ambilight;
using Smart.House.Application.Commands;
using Smart.House.Application.Events;
using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Providers.Camera;
using Smart.House.Application.Providers.Communication.Ftp;
using Smart.House.Application.Providers.Communication.Mail;
using Smart.House.Application.Providers.Ssh;
using Smart.House.Application.Repositories;
using Smart.House.Application.Repositories.Users;
using Smart.House.Application.Services.Devices;
using Smart.House.Application.Transaction;
using Smart.House.Camera;
using Smart.House.Data.Model;
using Smart.House.Data.Repositories;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Email;
using Smart.House.Email.Providers;
using Smart.House.Ftp.Providers;
using Smart.House.Grains.Decorators;
using Smart.House.Grains.Devices.Camera;
using Smart.House.Interface;
using Smart.House.Read;
using Smart.House.Read.Connection;
using Smart.House.Services.Devices.Camera;
using Smart.House.Services.Devices.Camera.Handlers.Events;
using Smart.House.Ssh.Providers;
using System.Reflection;

namespace Smart.House.Grains.Resolvers
{
    public static class Dependency
    {
        public static Container Build()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

            var mediator = new Mediator(container);

            var connectionString = @"Server=localhost\SQLEXPRESS;Database=SmartHouse;Trusted_Connection=True;";

            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            optionsBuilder.UseSqlServer(connectionString);

            container.RegisterSingleton(() => new ReadConnection(connectionString));

            RegisterHandlers(container);
            RegisterQueryHandlers(container);

            container.Register(() => new DataContext(optionsBuilder.Options, mediator), Lifestyle.Scoped);
            container.Register<IUnitOfWork>(() => container.GetInstance<DataContext>(), Lifestyle.Scoped);

            container.RegisterDecorator(
                typeof(IDispatcher<>),
                typeof(DispatcherTransaction<>));

            container.Register(typeof(IDispatcher<>), new[]
            {
                typeof(CameraDispatcher).GetTypeInfo().Assembly
            });

            container.Register<ICameraService, CameraService>(Lifestyle.Scoped);
            container.Register<IFtpProvider, FluentFtpProvider>(Lifestyle.Singleton);
            container.Register<ISshProvider, SshNetProvider>(Lifestyle.Singleton);

            RegisterRepositories(container);

            container.RegisterSingleton<ICameraProviderFactory>(new CameraProviderFactory
            {
                { "dlink", () => container.GetInstance<DlinkProvider>()}
            });
            container.RegisterSingleton<IAmbilightProviderFactory>(new AmbilightProviderFactory
            {
                { "hyperion", () => container.GetInstance<HyperionProvider>() }
            });
            container.RegisterSingleton<IEmailProviderFactory>(new EmailProviderFactory
            {
                { "gmail", () => container.GetInstance<GmailProvider>() }
            });

            return container;
        }

        private static void RegisterHandlers(Container container)
        {
            var assemblies = new[]
            {
                typeof(Device).GetTypeInfo().Assembly,
                typeof(MotionDetectedEventHandler).GetTypeInfo().Assembly
            };

            container.RegisterCollection(typeof(IDomainEventHandler<>), assemblies);
            container.Register(typeof(IRequestHandler<>), assemblies);
        }

        private static void RegisterQueryHandlers(Container container)
        {
            var assemblies = new[]
            {
                typeof(GetNotificationSettingsRequestHandler).GetTypeInfo().Assembly
            };

            container.Register(typeof(IRequestHandler<,>), assemblies);
        }

        private static void RegisterRepositories(Container container)
        {
            container.Register(typeof(IDeviceRepository<>), typeof(DeviceRepository<>), Lifestyle.Scoped);
            container.Register<ICameraRepository, CameraRepository>(Lifestyle.Scoped);
            container.Register<IUserRepository, UserRepository>(Lifestyle.Scoped);
            container.Register<INotificationRepository, NotificationRepository>(Lifestyle.Scoped);
        }
    }
}
