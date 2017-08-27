using Microsoft.AspNetCore.Mvc;
using Smart.House.Application.Mediator;
using Smart.House.Application.States;
using Smart.House.Dashboard.ViewModels;
using Smart.House.Services.Handlers.Requests.Commands;

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class CameraController : Controller
    {
        private readonly IMediator _mediator;

        public CameraController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public JsonResult GetCameras(string id)
        {
            var state = new CameraState
            {
                Identifier = "camera" + id
            };

            var command = new UpdateCameraStatusCommand(id);
            command.SetCurrentState(state);

            var newState = _mediator.DispatchRequest<UpdateCameraStatusCommand, CameraState>(command)
                .Result;

            var viewModel = new CameraViewModel
            {
                Identifier = id,
                IsMotionDetected = newState.IsMotionDetected
            };

            return new JsonResult(viewModel);
        }
    }
}