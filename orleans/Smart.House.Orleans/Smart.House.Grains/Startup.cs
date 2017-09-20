using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Orleans;
using Orleans.Runtime.Configuration;
using Smart.House.Grains.Resolvers;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Smart.House.Grains
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup()
        {
            string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Development";

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appconfig.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appconfig.{environment.ToLowerInvariant()}.json", optional: true)
                .AddEnvironmentVariables("ASPNETCORE_")
                .AddCommandLine(Environment.GetCommandLineArgs().Skip(1).ToArray());

            if ("Development".Equals(environment, StringComparison.OrdinalIgnoreCase) 
                && builder.GetFileProvider().GetFileInfo("Smart.House.Host.csproj").Exists)
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets<Startup>();
            }

            Configuration = builder.Build();
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.TryAdd(ServiceDescriptor.Singleton<ILoggerFactory, LoggerFactory>());
            services.TryAdd(ServiceDescriptor.Singleton(typeof(ILogger<>), typeof(Logger<>)));

            services.AddOptions();

            var container = Dependency.Build();

            services.AddSingleton((mediator) => new Mediator(container));
            services.AddSingleton((client) =>
            {
                return new Func<Task<IClusterClient>>(async () =>
                {
                    var config = ClientConfiguration.LocalhostSilo();
                    var clusterClient = new ClientBuilder().UseConfiguration(config).Build();
                    await clusterClient.Connect();

                    return clusterClient;
                });
            });

            return services.BuildServiceProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
        }
    }
}
