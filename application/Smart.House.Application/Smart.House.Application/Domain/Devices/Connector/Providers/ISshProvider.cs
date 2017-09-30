using Smart.House.Application.Domain.Devices.Connector.Dtos;
using System;

namespace Smart.House.Application.Domain.Devices.Connector.Providers
{
    public interface ISshProvider: IDisposable
    {
        ISshProvider Connect(Credential credential);
        void ExecuteCommand(string command);
    }
}
