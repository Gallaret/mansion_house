using Smart.House.Application.Providers.Communication.Ftp;
using System;

namespace Smart.House.Application.Providers.Ssh
{
    public interface ISshProvider: IDisposable
    {
        ISshProvider Connect(RemoteCredentials credentials);
        void ExecuteCommand(string command);
    }
}
