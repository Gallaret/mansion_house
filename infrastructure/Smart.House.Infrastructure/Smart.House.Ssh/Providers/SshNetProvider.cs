using Renci.SshNet;
using Smart.House.Application.Dtos.Connection;
using Smart.House.Application.Providers.Ssh;

namespace Smart.House.Ssh.Providers
{
    public class SshNetProvider : ISshProvider
    {
        private SshClient _sshClient;

        public SshNetProvider() { }

        private SshNetProvider(SshClient client)
        {
            _sshClient = client;
        }

        public void Dispose()
        {
            if (_sshClient != null)
                _sshClient.Disconnect();
        }

        public ISshProvider Connect(Credential credential)
        {
            _sshClient = new SshClient(credential.Address,
                credential.Login, credential.Password);

            return new SshNetProvider(_sshClient);
        }

        public void ExecuteCommand(string command)
        {
            if (!_sshClient.IsConnected) _sshClient.Connect();

            var executed = _sshClient.RunCommand(command);
        }
    }
}
