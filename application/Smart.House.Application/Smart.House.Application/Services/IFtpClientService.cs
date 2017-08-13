using System.IO;

namespace Smart.House.Application.Services
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
