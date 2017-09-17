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
using SimpleInjector.Lifestyles;
using Orleans.Runtime.Configuration;
using Orleans.Runtime;
using Orleans;
using System;
using System.Threading;

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

            var orleansClientConfig = ClientConfiguration.LocalhostSilo();
            orleansClientConfig.DeploymentId = Configuration["DeploymentId"];
            orleansClientConfig.DataConnectionString = Configuration.GetConnectionString("DataConnectionString");
            orleansClientConfig.AddSimpleMessageStreamProvider("Default");
            orleansClientConfig.DefaultTraceLevel = Severity.Warning;
            orleansClientConfig.TraceFileName = "";
            do
            {
                try
                {
                    GrainClient.Initialize(orleansClientConfig);
                }
                catch (Exception ex) when (ex is OrleansException || ex is SiloUnavailableException)
                {
                    // Wait for the Host to start
                    Thread.Sleep(3000);
                }
            }
            while (!GrainClient.IsInitialized);
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
            //var mediator = new Mediator(container);
            ////container.Register(() => container, Lifestyle.Singleton);
            //container.RegisterMvcControllers(app);
            //container.RegisterMvcViewComponents(app);

            //var connectionString = @"Server=localhost\SQLEXPRESS;Database=SmartHouse;Trusted_Connection=True;";

            //var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            //optionsBuilder.UseSqlServer(connectionString);

            //container.RegisterSingleton(() => new ReadConnection(connectionString));

            //RegisterHandlers();
            //RegisterQueryHandlers();

            //container.Register(() => new DataContext(optionsBuilder.Options, mediator), Lifestyle.Scoped);
            //container.Register<IUnitOfWork>(() => container.GetInstance<DataContext>(), Lifestyle.Scoped);

            ////container.RegisterDecorator(
            ////    typeof(IRequestHandler<>),
            ////    typeof(TransactionRequestDecorator<>));

            //container.RegisterSingleton(app.ApplicationServices.GetService<ILoggerFactory>());
            //container.Register(typeof(IStateService<>), new[] //register state services
            //{
            //    typeof(CameraService).GetTypeInfo().Assembly
            //});

            //container.Register<IFtpProvider, FtpProvider>(Lifestyle.Singleton);
            //container.Register<ISshProvider, SshProvider>(Lifestyle.Singleton);

            //RegisterRepositories();

            //container.RegisterSingleton<ICameraProviderFactory>(new CameraProviderFactory
            //{
            //    { "dlink", () => container.GetInstance<DlinkProvider>()}
            //});
            //container.RegisterSingleton<IAmbilightProviderFactory>(new AmbilightProviderFactory
            //{
            //    { "hyperion", () => container.GetInstance<HyperionProvider>() }
            //});
            //container.RegisterSingleton<IEmailProviderFactory>(new EmailProviderFactory
            //{
            //    { "gmail", () => container.GetInstance<GmailProvider>() }
            //});

        }


        //private void RegisterHandlers()
        //{
        //    var assemblies = new [] 
        //    {
        //        typeof(Device).GetTypeInfo().Assembly,
        //        typeof(MotionDetectedEventHandler).GetTypeInfo().Assembly
        //    };

        //    container.RegisterCollection(typeof(IDomainEventHandler<>), assemblies);
        //    container.Register(typeof(IRequestHandler<>), assemblies);
        //}

        //private void RegisterQueryHandlers()
        //{
        //    var assemblies = new[]
        //    {
        //        typeof(GetNotificationSettingsRequestHandler).GetTypeInfo().Assembly
        //    };

        //    container.Register(typeof(IRequestHandler<,>), assemblies);
        //}

        //private void RegisterRepositories()
        //{
        //    container.Register(typeof(IDeviceRepository<>), typeof(DeviceRepository<>), Lifestyle.Scoped);
        //    container.Register<ICameraRepository, CameraRepository>(Lifestyle.Scoped);
        //    container.Register<IUserRepository, UserRepository>(Lifestyle.Scoped);
        //    container.Register<INotificationRepository, NotificationRepository>(Lifestyle.Scoped);
        //}
    }
}
