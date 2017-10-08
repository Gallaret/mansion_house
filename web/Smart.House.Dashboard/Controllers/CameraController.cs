using Microsoft.AspNetCore.Mvc;
using Orleans;
using Orleans.Runtime.Configuration;
using Smart.House.Dashboard.ViewModels;
using Smart.House.Interface.Devices;
using System.Threading.Tasks;

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class CameraController : Controller
    {
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
         
            var state = await camera.GetState();

            var viewModel = new CameraViewModel
            {
                Identifier = id,
                IsMotionDetected = state.IsMotionDetected,
                IsRecording = state.IsRecording
            };

            return new JsonResult(viewModel);       
        }

        [HttpPost]
        public async Task<IActionResult> StartRecording([FromBody]string id)
        {
            var config = ClientConfiguration.LocalhostSilo();
            var client = new ClientBuilder().UseConfiguration(config).Build();
            await client.Connect();

            ICamera camera = client.GetGrain<ICamera>("camera" + id);
            await camera.StartRecording();

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> StopRecording([FromBody]string id)
        {
            var config = ClientConfiguration.LocalhostSilo();
            var client = new ClientBuilder().UseConfiguration(config).Build();
            await client.Connect();

            ICamera camera = client.GetGrain<ICamera>("camera" + id);
            await camera.StopRecording();

            return Ok();
        }
    }
}