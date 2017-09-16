using Smart.House.Application.Providers.Ambilight;
using Smart.House.Application.Providers.Communication.Ftp;
using Smart.House.Application.Providers.Ssh;
using Smart.House.Domain.Devices.Entities;
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

        public Task RunAlarm(Device device)
        {
            var credentials = new RemoteCredentials
            {
                Address = device.RemoteAddress,
                Login = device.RemoteLogin,
                Password = device.RemotePassword
            };

            using (var client = _sshProvider.Connect(credentials))
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
