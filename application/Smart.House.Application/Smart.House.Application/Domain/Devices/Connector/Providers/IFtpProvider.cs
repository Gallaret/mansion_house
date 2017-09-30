using Smart.House.Application.Domain.Devices.Storekeeper.Dtos;
using Smart.House.Application.Domain.Devices.Connector.Dtos;
using System;
using System.IO;

namespace Smart.House.Application.Domain.Devices.Connector.Providers
{
    public interface IFtpProvider: IDisposable
    {
        IFtpProvider Connect(Credential credential);
        RemoteFile [] ScanFiles(string path);
        bool DirectoryExists(string directory);
        FileInfo DownloadFile(string path, string localPath);
    }
}
