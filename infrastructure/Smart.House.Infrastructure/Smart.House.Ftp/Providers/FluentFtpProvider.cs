using FluentFTP;
using Smart.House.Application.Providers.Communication.Ftp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;

namespace Smart.House.Ftp.Providers
{
    public class FluentFtpProvider : IFtpProvider
    {
        private FtpClient _ftpClient;
        private FluentFtpProvider(FtpClient ftpClient)
        {
            _ftpClient = ftpClient;
        }

        public FluentFtpProvider() { }

        public IFtpProvider Connect(RemoteCredentials credentials)
        {
            var client = new FtpClient(credentials.Address)
            {
                Credentials = new NetworkCredential(
                    credentials.Login, credentials.Password)
            };

            client.Connect();

            return new FluentFtpProvider(client);
        }

        public bool DirectoryExists(string directory)
        {
            if (!_ftpClient.IsConnected)
                throw new ArgumentException("FTP not connected");

            var exists = _ftpClient.DirectoryExists(directory);
            return exists;
        }

        public void Dispose()
        {
            if (_ftpClient != null) _ftpClient.Disconnect();
        }

        public FileInfo[] ScanFiles(string path)
        {
            if (!_ftpClient.IsConnected)
                throw new ArgumentException("FTP not connected");

            var files = new List<FileInfo>();

            if (!_ftpClient.DirectoryExists(path)) return files.ToArray();

            foreach (FtpListItem item in _ftpClient.GetListing(path))
            {
                if (item.Type == FtpFileSystemObjectType.File)
                {
                    var file = new FileInfo(@"C:\Serwer\FTP-Camera" + item.FullName); //To Do :)
                    files.Add(file);
                }
            }

            return files.ToArray();
        }
    }
}
