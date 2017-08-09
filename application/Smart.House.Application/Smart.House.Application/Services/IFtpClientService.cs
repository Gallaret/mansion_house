using Smart.House.Domain.Values;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Smart.House.Application.Services
{
    public interface IFtpClientService
    {
        FileInfo[] ScanFiles(string path, Credential credentials);
    }
}
