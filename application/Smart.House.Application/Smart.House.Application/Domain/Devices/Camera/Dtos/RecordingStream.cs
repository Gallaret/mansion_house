using Smart.House.Application.Domain.Devices.Connector.Dtos;

namespace Smart.House.Application.Domain.Devices.Camera.Dtos
{   
    using Camera = House.Domain.Devices.Entities.Camera;

    public class RecordingStream
    {
        private readonly Camera _camera;

        public string Path { get; private set; }
        public string FileName { get; private set; }
        public Credential Credential => new Credential(_camera);

        public RecordingStream(Camera camera, string fileName)
        {
            _camera = camera;

            FileName = fileName;
            Path = _camera.RemotePath;
        }
    }
}
