using Smart.House.Domain.Entities.Camera;
using System;
using System.Collections.Generic;
using System.Text;

namespace Smart.House.Domain.Repositories
{
    public interface ICameraRepository
    {
        CameraSettings GetSettings(string identifier);
    }
}
