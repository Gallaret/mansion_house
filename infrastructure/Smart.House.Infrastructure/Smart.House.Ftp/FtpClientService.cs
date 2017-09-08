using FluentFTP;
using Smart.House.Application.Providers.Ftp;
using System.Collections.Generic;
using System.IO;
using System.Net;

namespace Smart.House.Ftp
{
    public class FtpClientService : IFtpClientService
    {
        public FileInfo[] ScanFiles(string path, FtpCredentials credentials)
        {
            var client = new FtpClient(credentials.Uri);
            client.Credentials = new NetworkCredential(credentials.Login, credentials.Password);

            var files = new List<FileInfo>();

            client.Connect();

            if (!client.DirectoryExists(path))
            {
                return files.ToArray();
            }

            foreach (FtpListItem item in client.GetListing(path))
            {
                if (item.Type == FtpFileSystemObjectType.File)
                {
                    
                    var file = new FileInfo(@"C:\Serwer\FTP-Camera" + item.FullName);
                    files.Add(file);
                }
            }

            client.Disconnect();

            return files.ToArray();
        }
    }
}
