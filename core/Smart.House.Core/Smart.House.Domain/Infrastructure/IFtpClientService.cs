using System.IO;

namespace Smart.House.Domain.Infrastructure
{
    public struct FtpCredentials
    {
        public string Uri { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }

    public interface IFtpClientService
    {
        FileInfo[] ScanFiles(string path, FtpCredentials credentials);
    }
}
