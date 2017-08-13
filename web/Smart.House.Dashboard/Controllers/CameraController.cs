using Microsoft.AspNetCore.Mvc;
using Smart.House.Application.Services.Devices;
using Smart.House.Domain.Values;

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class CameraController : Controller
    {
        private readonly CameraService _service;
        public CameraController(CameraService service)
        {
            _service = service;
        }

        [HttpGet]
        public JsonResult GetCameras(string id)
        {
            var status = new CameraStatus
            {
                Identifier = "camera" + id
            };

            _service.UpdateCameraState(status);

            return new JsonResult(status);
        }
    }
}