using Smart.House.Application.Providers.Ftp;
using System;

namespace Smart.House.Application.Providers.Ssh
{
    public interface ISshClientService: IDisposable
    {
        ISshClientService Connect(RemoteCredentials credentials);
        void ExecuteCommand(string command);
    }
}
