using Microsoft.AspNetCore.Mvc;
using SimpleInjector;
using SimpleInjector.Lifestyles;
using Smart.House.Application.Mediator;
using Smart.House.Application.Services;
using Smart.House.Application.Services.States;
using Smart.House.Dashboard.Resolvers;
using Smart.House.Dashboard.ViewModels;
using Smart.House.Domain.Notifications.ValueTypes;
using Smart.House.Read.Handlers.Queries;
using Smart.House.Read.Handlers.Results;
using Smart.House.Services.Handlers.Requests.Commands;
using System.Threading.Tasks;

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class CameraController : Controller
    {
        private readonly IStateService<CameraState> _cameraService;
        private readonly IStateService<NotificationState> _notificationService;
        private readonly Container _container;

        private static string lastDetectedFile;

        public IMediator Mediator
        {
            get
            {
                return new Mediator(_container);
            }
        }

        public CameraController(IStateService<CameraState> cameraService, 
            IStateService<NotificationState> notificationService,
            Container container)
        {
            _cameraService = cameraService;
            _notificationService = notificationService;
            _container = container;
        }

        [HttpGet]
        public async Task<JsonResult> GetCameras(string id)
        {
            var state = new CameraState("camera" + id);
            var cameraState = _cameraService.GetNewState(state).Result;

            var fileChanged = lastDetectedFile != cameraState.CurrentMotionFileName;
            var motionDetected = cameraState.IsMotionDetected && fileChanged;

            if (motionDetected)
            {
                lastDetectedFile = cameraState.CurrentMotionFileName;

                var result = Mediator.DispatchRequest<NotificationSettingsQuery, NotificationSettingsResult>(
                    new NotificationSettingsQuery
                    {
                        Identifier = cameraState.Identifier
                    }).Result;

                if (result.Device.EmailNotificationEnabled)
                {
                    using (AsyncScopedLifestyle.BeginScope(_container))
                        foreach (var notificator in result.Noticators)
                        {
                            await Mediator.DispatchRequest(new EmailNotificationCommand
                            {
                                Identifier = notificator.Identifier,
                                Type = EventType.MotionDetected,
                                Value = cameraState.CurrentMotionFileName
                            });
                        }
                }

                if (result.Device.AmbientNotificationEnabled)
                {
                    using (AsyncScopedLifestyle.BeginScope(_container))
                        await Mediator.DispatchRequest(new AmbilightAlarmCommand
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
                IsMotionDetected = motionDetected
            };

            return new JsonResult(viewModel);       
        }
    }
}