using Smart.House.Application.Dtos.Connection;
using Smart.House.Application.Dtos.Storage;
using System;
using System.IO;

namespace Smart.House.Application.Providers.Communication.Ftp
{
    public interface IFtpProvider: IDisposable
    {
        IFtpProvider Connect(Credential credential);
        RemoteFile [] ScanFiles(string path);
        bool DirectoryExists(string directory);
        FileInfo DownloadFile(string path, string localPath);
    }
}
