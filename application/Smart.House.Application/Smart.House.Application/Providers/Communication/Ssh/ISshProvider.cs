using Smart.House.Application.Dtos.Connection;
using System;

namespace Smart.House.Application.Providers.Ssh
{
    public interface ISshProvider: IDisposable
    {
        ISshProvider Connect(Credential credential);
        void ExecuteCommand(string command);
    }
}
