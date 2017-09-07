using Microsoft.AspNetCore.Mvc;
using Smart.House.Application.Mediator;
using Smart.House.Application.Services;
using Smart.House.Application.Services.States;
using Smart.House.Dashboard.ViewModels;
using Smart.House.Domain.Notifications.ValueTypes;
using Smart.House.Services.Handlers.Requests.Commands;
using System.Linq;

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class CameraController : Controller
    {
        private readonly IMediator _mediator;
        private readonly IStateService<CameraState> _cameraService;
        private readonly IStateService<NotificationState> _notificationService;

        public CameraController(IStateService<CameraState> cameraService, 
            IStateService<NotificationState> notificationService,
            IMediator mediator)
        {
            _cameraService = cameraService;
            _notificationService = notificationService;
            _mediator = mediator;
        }

        [HttpGet]
        public JsonResult GetCameras(string id)
        {
            var state = new CameraState("camera" + id);

            var cameraState = _cameraService.GetNewState(state).Result;

            if (cameraState.IsMotionDetected)
            {
                var notifications = Enumerable.Empty<Notification>();

                var notificationState =_notificationService.GetNewState(
                    new NotificationState(notifications.ToArray())).Result;

                _mediator.DispatchRequest(
                    new AmbilightAlarmCommand
                    {
                        Identifier = "ambilight_1"
                    });
            }

            var viewModel = new CameraViewModel
            {
                Identifier = id,
                IsMotionDetected = cameraState.IsMotionDetected
            };

            return new JsonResult(viewModel);
        }
    }
}