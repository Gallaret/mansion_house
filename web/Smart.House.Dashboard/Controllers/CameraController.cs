using Microsoft.AspNetCore.Mvc;
using Smart.House.Application.Services;
using Smart.House.Application.Services.Devices;
using Smart.House.Application.States;
using Smart.House.Dashboard.ViewModels;

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class CameraController : Controller
    {
        private readonly ICameraService _cameraService;
        private readonly INotificationService _notificationService;

        public CameraController(ICameraService cameraService,
            INotificationService notificationService)
        {
            _cameraService = cameraService;
            _notificationService = notificationService;
        }

        [HttpGet]
        public JsonResult GetCameras(string id)
        {
            var state = new CameraState
            {
                Identifier = "camera" + id
            };

            var cameraState = _cameraService.GetNewState(state);

            var notificationState = new NotificationState
            {
                Identifier = cameraState.Identifier,
                Upcoming = cameraState.Notifications
            };

            var newNotificationState = _notificationService
                .SendNotifications(notificationState); 

            var viewModel = new CameraViewModel
            {
                Identifier = id,
                IsMotionDetected = cameraState.IsMotionDetected
            };

            return new JsonResult(viewModel);
        }
    }
}