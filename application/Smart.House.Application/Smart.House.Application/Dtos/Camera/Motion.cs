namespace Smart.House.Application.Dtos.Camera
{
    public struct Motion
    {
        public Motion(bool isDetected, string fileName)
        {
            IsDetected = isDetected;
            FileName = fileName;
        }

        public bool IsDetected { get; private set; }
        public string FileName { get; private set; }
    }
}
