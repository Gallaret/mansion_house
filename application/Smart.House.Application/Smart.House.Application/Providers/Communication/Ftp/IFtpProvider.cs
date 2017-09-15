using System;
using System.IO;

namespace Smart.House.Application.Providers.Communication.Ftp
{
    public struct RemoteCredentials
    {
        public string Address { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }

    public interface IFtpProvider: IDisposable
    {
        IFtpProvider Connect(RemoteCredentials credentials);
        FileInfo[] ScanFiles(string path);
        bool DirectoryExists(string directory);
    }
}
