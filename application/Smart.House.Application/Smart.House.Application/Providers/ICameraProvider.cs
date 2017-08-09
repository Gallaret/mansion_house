using Smart.House.Domain.Entities.Camera;
using System;
using System.Collections.Generic;
using System.Text;

namespace Smart.House.Application.Providers
{
    public interface ICameraProvider
    {
        Camera GetCameraInfo(string identifier);

        string GetMotionDirectory(string ftpPath);
    }
}
