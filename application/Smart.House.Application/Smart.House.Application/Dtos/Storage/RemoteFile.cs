using System;

namespace Smart.House.Application.Dtos.Storage
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
