using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Controllers;
using SimpleInjector;
using SimpleInjector.Integration.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewComponents;
using Microsoft.EntityFrameworkCore;
using SimpleInjector.Lifestyles;
using Smart.House.DLink;
using Smart.House.Ftp;
using Smart.House.Domain.Infrastructure;
using Smart.House.Dashboard.Resolvers;
using Smart.House.Application.Mediator;
using System.Reflection;
using Smart.House.Application.Events;
using Smart.House.Application.Commands;
using Smart.House.Services.Handlers.Events;
using Smart.House.Application.Decorators;
using Smart.House.Application.Transaction;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Application.Services;
using Smart.House.Services.State;
using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Providers.Camera;
using Smart.House.Application.Factories.Devices;
using Smart.House.Application.Repositories;
using Smart.House.Data.Model;
using Smart.House.Data.Repositories;
using Smart.House.Read;
using System;
using Smart.House.Read.Connection;

namespace Smart.House.Dashboard
{
    public class Startup
    {
        private Container container = new Container();

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see https://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            IntegrateSimpleInjector(services);
        }

        private void IntegrateSimpleInjector(IServiceCollection services)
        {
            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddSingleton<IControllerActivator>(
                new SimpleInjectorControllerActivator(container));
            services.AddSingleton<IViewComponentActivator>(
                new SimpleInjectorViewComponentActivator(container));
            //var connection = @"Server=localhost\SQLEXPRESS;Database=SmartHouse;Trusted_Connection=True;";
            ////services.AddEntityFrameworkSqlServer();
            //services.AddDbContext<DataContext>(options => options.UseSqlServer(connection));
            services.EnableSimpleInjectorCrossWiring(container);
            services.UseSimpleInjectorAspNetRequestScoping(container);
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            InitializeContainer(app);

            container.Verify();

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
         
            app.UseStaticFiles();

            // Add external authentication middleware below. To configure them please see https://go.microsoft.com/fwlink/?LinkID=532715
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }

        private void InitializeContainer(IApplicationBuilder app)
        {
            var mediator = new Mediator(container);

            container.RegisterMvcControllers(app);
            container.RegisterMvcViewComponents(app);

            var connectionString = @"Server=localhost\SQLEXPRESS;Database=SmartHouse;Trusted_Connection=True;";

            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            optionsBuilder.UseSqlServer(connectionString);

            container.RegisterSingleton(() => new ReadConnection(connectionString));

            RegisterHandlers();

            container.Register(() => new DataContext(optionsBuilder.Options, mediator), Lifestyle.Scoped);
            container.Register<IUnitOfWork>(() => container.GetInstance<DataContext>(), Lifestyle.Scoped);

            container.RegisterDecorator(
                typeof(IRequestHandler<>),
                typeof(TransactionRequestDecorator<,>));

            container.RegisterSingleton(app.ApplicationServices.GetService<ILoggerFactory>());
            container.Register(typeof(IStateService<>), new[] //register state services
            {
                typeof(CameraService).GetTypeInfo().Assembly
            });

            container.RegisterDecorator(
               typeof(IStateService<>),
               typeof(TransactionStateDecorator<>));

            container.Register<IFtpClientService, FtpClientService>(Lifestyle.Singleton);
            container.Register<ICameraRepository, CameraRepository>(Lifestyle.Scoped);
            container.Register<INotificationRepository, NotificationRepository>(Lifestyle.Scoped);
            container.RegisterSingleton<ICameraProviderFactory>(new CameraProviderFactory
            {
                { "dlink", () => container.GetInstance<CameraProvider>()},
            });
            container.RegisterSingleton<IAmbilightProviderFactory>(new AmbilightProviderFactory
            {
                { "hyperion", () => container.GetInstance<IAmbilightProvider>() },
            });
            container.RegisterSingleton<IMediator>(() => mediator);
        }


        private void RegisterHandlers()
        {
            var assemblies = new [] 
            {
                typeof(Device).GetTypeInfo().Assembly,
                typeof(MotionDetectedEventHandler).GetTypeInfo().Assembly
            };

            container.RegisterCollection(typeof(IDomainEventHandler<>), assemblies);
            container.Register(typeof(IRequestHandler<>), assemblies);
        }

        private void RegisterQueryHandlers()
        {
            var assemblies = new[]
            {
                typeof(GetNotificationSettingsRequestHandler).GetTypeInfo().Assembly
            };

            container.Register(typeof(IRequestHandler<,>), assemblies);
        }
    }
}
