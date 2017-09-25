using Smart.House.Application.Dtos.Connection;
using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Providers.Ssh;
using System.Threading.Tasks;

namespace Smart.House.Ambilight
{
    public class HyperionProvider : IAmbilightProvider
    {
        const string START_ALARM_COMMAND = "hyperion-remote --effect 'Knight rider'";
        const string STOP_ALARM_COMMAND = "hyperion-remote --clear";

        private readonly ISshProvider _sshProvider;

        public HyperionProvider(ISshProvider sshProvider)
        {
            _sshProvider = sshProvider;
        }      

        public Task RunAlarm(Credential credential)
        {
            using (var client = _sshProvider.Connect(credential))
            {
                return Task.Run(async () =>
                {
                    client.ExecuteCommand(START_ALARM_COMMAND);

                    await Task.Delay(5000);

                    client.ExecuteCommand(STOP_ALARM_COMMAND);
                });      
            }
        }
    }
}
