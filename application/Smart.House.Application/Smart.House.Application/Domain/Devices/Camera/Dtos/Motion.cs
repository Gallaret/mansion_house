namespace Smart.House.Application.Domain.Devices.Camera.Dtos
{
    public struct Motion
    {
        public string FileName { get; private set; }

        public bool IsDetected { get; private set; }

        public Motion(bool isDetected, string fileName)
        {
            IsDetected = isDetected;
            FileName = fileName;
        }
    }
}
