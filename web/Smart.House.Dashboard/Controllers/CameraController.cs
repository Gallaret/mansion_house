using Microsoft.AspNetCore.Mvc;
using Orleans;
using Orleans.Runtime.Configuration;
using Smart.House.Dashboard.ViewModels;
using Smart.House.Interface;
using System.Threading.Tasks;

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class CameraController : Controller
    {

       private static string lastDetectedFile;


        public CameraController()
        {

        }

        [HttpGet]
        public async Task<JsonResult> GetCameras(string id)
        {
            var config = ClientConfiguration.LocalhostSilo();
            var client = new ClientBuilder().UseConfiguration(config).Build();
            await client.Connect();

            ICamera camera = client.GetGrain<ICamera>("camera" + id);
            //var state = new CameraState("camera" + id);
            //var cameraState = _cameraService.GetNewState(state).Result;

            //var fileChanged = lastDetectedFile != cameraState.CurrentMotionFileName;
            //var motionDetected = cameraState.IsMotionDetected && fileChanged;

            //if (motionDetected)
            //{
            //    lastDetectedFile = cameraState.CurrentMotionFileName;

            //    var result = Mediator.DispatchRequest<NotificationSettingsQuery, NotificationSettingsResult>(
            //        new NotificationSettingsQuery
            //        {
            //            Identifier = cameraState.Identifier
            //        }).Result;

            //    if (result.Device.EmailNotificationEnabled)
            //    {
            //        using (AsyncScopedLifestyle.BeginScope(_container))
            //            foreach (var notificator in result.Noticators)
            //            {
            //                await Mediator.DispatchRequest(new EmailNotificationCommand
            //                {
            //                    Identifier = notificator.Identifier,
            //                    Type = EventType.MotionDetected,
            //                    Value = cameraState.CurrentMotionFileName
            //                });
            //            }
            //    }

            //    if (result.Device.AmbientNotificationEnabled)
            //    {
            //        using (AsyncScopedLifestyle.BeginScope(_container))
            //            await Mediator.DispatchRequest(new AmbilightAlarmCommand
            //            {
            //                Identifier = "ambilight",
            //                Value = cameraState.CurrentMotionFileName,
            //                EventType = EventType.MotionDetected
            //            });
            //    }
            //}

            var state = await camera.GetState();

            var viewModel = new CameraViewModel
            {
                Identifier = id,
                IsMotionDetected = state.IsMotionDetected
            };

            return new JsonResult(viewModel);       
        }
    }
}