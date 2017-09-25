using FluentFTP;
using Smart.House.Application.Dtos.Connection;
using Smart.House.Application.Dtos.Storage;
using Smart.House.Application.Providers.Communication.Ftp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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

        public IFtpProvider Connect(Credential credential)
        {
            var client = new FtpClient(credential.Address)
            {
                Credentials = new NetworkCredential(
                    credential.Login, credential.Password)
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

        public RemoteFile [] ScanFiles(string path)
        {
            if (!_ftpClient.IsConnected)
                throw new ArgumentException("FTP not connected");

            var files = new List<RemoteFile>();

            if (!_ftpClient.DirectoryExists(path)) return Enumerable.Empty<RemoteFile>().ToArray();

            foreach (FtpListItem item in _ftpClient.GetListing(path))
            {
                if (item.Type == FtpFileSystemObjectType.File)
                {
                    files.Add(new RemoteFile(item.FullName, item.Created));
                }
            }

            return files.ToArray();
        }

        public FileInfo DownloadFile(string path, string localPath)
        {
            if (!_ftpClient.IsConnected)
                throw new ArgumentException("FTP not connected");

            if (!Directory.Exists(localPath)) Directory.CreateDirectory(localPath);

            var filePath = Path.Combine(localPath, Path.GetFileName(path));
            _ftpClient.DownloadFile(filePath, path);

            var fileName = Path.GetFileName(path);

            return new FileInfo(filePath);
        }
    }
}
