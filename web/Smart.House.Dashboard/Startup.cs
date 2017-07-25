using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using React.AspNet;
using Microsoft.AspNetCore.Mvc.Controllers;
using SimpleInjector;
using SimpleInjector.Integration.AspNetCore;
using SimpleInjector.Integration.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewComponents;
using Smart.House.Domain.Services;

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
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMvc();
            services.AddSingleton<IControllerActivator>(new SimpleInjectorControllerActivator(container));
            services.AddSingleton<IViewComponentActivator>(new SimpleInjectorViewComponentActivator(container));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseSimpleInjectorAspNetRequestScoping(container);
            container.Options.DefaultScopedLifestyle = new AspNetRequestLifestyle();

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
            //app.UseReact(config =>
            //{
            //    // If you want to use server-side rendering of React components,
            //    // add all the necessary JavaScript files here. This includes
            //    // your components as well as all of their dependencies.
            //    // See http://reactjs.net/ for more information. Example:
            //    //config
            //    //  .AddScript("~/js/remarkable.min.js")
            //    //  .AddScript("~/js/components/header/notificationBar.jsx")
            //    //  .AddScript("~/js/tutorial.jsx").SetJsonSerializerSettings(new JsonSerializerSettings
            //    //  {
            //    //      StringEscapeHandling = StringEscapeHandling.EscapeHtml, 
            //    //      ContractResolver = new CamelCasePropertyNamesContractResolver()
            //    //  });
            //    //// If you use an external build too (for example, Babel, Webpack,
            //    //// Browserify or Gulp), you can improve performance by disabling
            //    //// ReactJS.NET's version of Babel and loading the pre-transpiled
            //    //// scripts. Example:
            //    config
            //      .SetLoadBabel(false)
            //      .AddScriptWithoutTransform("~/js/server.bundle.js");
            //});
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

            container.RegisterSingleton(app.ApplicationServices.GetService<ILoggerFactory>());
            container.Register<UserService>();
        }
    }
}
