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
using Smart.House.EntityFramework.DataModel;
using Smart.House.EntityFramework.Repositories;
using SimpleInjector.Lifestyles;
using Smart.House.DLink;
using Smart.House.Ftp;
using Smart.House.Application.Services.Devices;
using Smart.House.Services.Devices;
using Smart.House.Domain.Infrastructure;
using Smart.House.Camera.Providers;

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
            container.RegisterMvcControllers(app);
            container.RegisterMvcViewComponents(app);

            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            optionsBuilder.UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=SmartHouse;Trusted_Connection=True;");
            container.Register(() => new DataContext(optionsBuilder.Options), Lifestyle.Scoped);

            container.RegisterSingleton(app.ApplicationServices.GetService<ILoggerFactory>());
            container.Register<ICameraService, CameraService>();
            container.Register<IFtpClientService, FtpClientService>(Lifestyle.Singleton);
            container.Register<Camera.Repositories.ICameraRepository, CameraRepository>(Lifestyle.Scoped);
            container.RegisterSingleton<ICameraProviderFactory>(new Camera.Factories.CameraProviderFactory
            {
                { "dlink", () => container.GetInstance<CameraProvider>()},
            });
        }
    }
}
