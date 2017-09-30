using System;

namespace Smart.House.Application.Domain.Devices.Storekeeper.Dtos
{
    public class RemoteFile
    {
        public string FileName { get; set; }

        public DateTime CreationTime { get; set; }

        public RemoteFile(string fileName, DateTime creationTime)
        {
            FileName = fileName;
            CreationTime = creationTime;
        }
    }
}
