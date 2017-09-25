namespace Smart.House.Application.Dtos.Camera
{
    public struct MotionSettings
    {
        public string Path { get; private set; }
        public string FileName { get; private set; }

        public MotionSettings(string path, string fileName)
        {
            FileName = fileName;
            Path = path;
        }
    }
}
