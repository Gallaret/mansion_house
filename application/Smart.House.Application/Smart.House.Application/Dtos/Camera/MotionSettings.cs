namespace Smart.House.Application.Dtos.Camera
{
    using Camera = Domain.Devices.Entities.Camera;

    public struct MotionSettings
    {
        public string Login { get; private set; }
        public string Password { get; private set; }
        public string Address { get; private set; }
        public string Path { get; private set; }
        public string FileName { get; private set; }

        public MotionSettings(Camera camera, string fileName)
        {
            FileName = fileName;
            Login = camera.RemoteLogin;
            Password = camera.RemotePassword;
            Address = camera.RemoteAddress;
            Path = camera.RemotePath;
        }
    }
}
