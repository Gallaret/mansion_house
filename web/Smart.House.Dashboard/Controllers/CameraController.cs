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
                IsMotionDetected = state.IsMotionDetected
            };

            return new JsonResult(viewModel);       
        }
    }
}