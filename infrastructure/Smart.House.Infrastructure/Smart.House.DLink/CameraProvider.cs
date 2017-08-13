using Smart.House.Application.Providers;
using System;
using Smart.House.Domain.Entities.Camera;
using Smart.House.Domain.Repositories;

namespace Smart.House.DLink
{
    public class CameraProvider : ICameraProvider
    {
        private readonly ICameraRepository _repository;

        public CameraProvider(ICameraRepository repository)
        {
            _repository = repository;
        }

        public Camera GetCameraInfo(string identifier)
        {
            return _repository.Get(identifier);
        }

        public string GetMotionDirectory(string ftpPath)
        {
            var now = DateTime.Now;
            var catalog = now.ToString("yyyyMMdd");
            var subcatalog = new TimeSpan(now.Hour, now.Minute, now.Second).ToString("hh");

            return $"{ftpPath}/{catalog}/{subcatalog}";
        }
    }
}
