using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Orleans.Runtime.Configuration;
using Orleans;
using Smart.House.Interface.Devices;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class TelevisionController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> SetFireplace([FromBody]string id)
        {
            var config = ClientConfiguration.LocalhostSilo();
            var client = new ClientBuilder().UseConfiguration(config).Build();
            await client.Connect();

            var television = client.GetGrain<ITelevision>("television" + id);
            await television.SetFireplace();

            return Ok();
        }
    }
}
