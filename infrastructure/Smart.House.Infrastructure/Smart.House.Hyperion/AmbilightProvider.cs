using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Providers.Ftp;
using Smart.House.Application.Providers.Ssh;
using System.Threading.Tasks;

namespace Smart.House.Hyperion
{
    public class AmbilightProvider : IAmbilightProvider
    {
        private readonly ISshClientService _sshService;

        public AmbilightProvider(ISshClientService sshService)
        {
            _sshService = sshService;
        }

        public async Task RunAlarm(RemoteCredentials credentials)
        {
            const string startCommand = "hyperion-remote --effect 'Knight rider'";
            const string stopCommand = "hyperion-remote --clear";

            using (var client = _sshService.Connect(credentials))
            {
                client.ExecuteCommand(startCommand);

                await Task.Delay(5000);

                client.ExecuteCommand(stopCommand);
            }     
        }
    }
}
