using Microsoft.EntityFrameworkCore;
using SimpleInjector;
using SimpleInjector.Lifestyles;
using Smart.House.Ambilight;
using Smart.House.Application.Commands;
using Smart.House.Application.Domain.Devices;
using Smart.House.Application.Domain.Devices.Ambilight.Factories;
using Smart.House.Application.Domain.Devices.Camera.Factories;
using Smart.House.Application.Domain.Devices.Camera.Repositories;
using Smart.House.Application.Domain.Devices.Camera.Services;
using Smart.House.Application.Domain.Devices.Connector.Providers;
using Smart.House.Application.Domain.Devices.Notificator.Factories;
using Smart.House.Application.Domain.Devices.Notificator.Repositories;
using Smart.House.Application.Domain.Devices.Notificator.Services;
using Smart.House.Application.Domain.Users.Repositories;
using Smart.House.Application.Events;
using Smart.House.Application.Transaction;
using Smart.House.Camera;
using Smart.House.Data.Model;
using Smart.House.Data.Repositories;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Ftp.Providers;
using Smart.House.Grains.Decorators;
using Smart.House.Grains.Devices.Camera;
using Smart.House.Interface;
using Smart.House.Messager;
using Smart.House.Messager.Providers.Email;
using Smart.House.Messager.Providers.Text;
using Smart.House.Read;
using Smart.House.Read.Connection;
using Smart.House.Services.Devices.Camera;
using Smart.House.Services.Devices.Camera.Handlers.Events;
using Smart.House.Services.Devices.Notificator;
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
            container.Register<INotificatorService, NotificatorService>(Lifestyle.Scoped);
            container.Register<IFtpProvider, FluentFtpProvider>(Lifestyle.Singleton);
            container.Register<ISshProvider, SshNetProvider>(Lifestyle.Singleton);

            RegisterRepositories(container);

            container.RegisterSingleton<ICameraProviderFactory>(new CameraProviderFactory
            {
                { "dlink", () => container.GetInstance<DLink>()}
            });
            container.RegisterSingleton<IAmbilightProviderFactory>(new AmbilightProviderFactory
            {
                { "hyperion", () => container.GetInstance<HyperionProvider>() }
            });
            container.RegisterSingleton<IMessageProviderFactory>(new MessageProviderFactory
            {
                { "gmail", () => container.GetInstance<GmailProvider>() },
                { "plusgsm", () => container.GetInstance<PlusGSM>() }
            });

            return container;
        }

        private static void RegisterHandlers(Container container)
        {
            var assemblies = new[]
            {
                typeof(Device).GetTypeInfo().Assembly,
                typeof(MotionDetected).GetTypeInfo().Assembly
            };

            container.RegisterCollection(typeof(IDomainEventHandler<>), assemblies);
            container.Register(typeof(IRequestHandler<>), assemblies);
        }

        private static void RegisterQueryHandlers(Container container)
        {
            var assemblies = new[]
            {
                typeof(GetNotificationSettings).GetTypeInfo().Assembly
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
