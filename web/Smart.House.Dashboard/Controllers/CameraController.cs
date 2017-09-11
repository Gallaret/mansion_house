using Microsoft.AspNetCore.Mvc;
using Smart.House.Application.Mediator;
using Smart.House.Application.Services;
using Smart.House.Application.Services.States;
using Smart.House.Dashboard.ViewModels;
using Smart.House.Domain.Notifications.ValueTypes;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
using Smart.House.Services.Handlers.Requests.Commands;

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
                var result = _mediator.DispatchRequest<NotificationSettingsQuery, NotificationSettingsResult>(
                    new NotificationSettingsQuery
                    {
                        Identifier = cameraState.Identifier
                    }).Result;

                if (result.ShouldSendAmbilight)
                {
                    _mediator.DispatchRequest(new AmbilightAlarmCommand
                    {
                        Identifier = "ambilight",
                        Value = cameraState.CurrentMotionFileName,
                        EventType = EventType.MotionDetected
                    });
                }
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