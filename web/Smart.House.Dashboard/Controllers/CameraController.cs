using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using FluentFTP;

namespace Smart.House.Dashboard.Controllers
{
    [Route("[controller]/[action]")]
    public class CameraController : Controller
    {
        [HttpGet]
        public JsonResult GetCameras(object id)
        {
            FtpClient client = new FtpClient("192.168.0.24");

            // if you don't specify login credentials, we use the "anonymous" user account
            client.Credentials = new NetworkCredential("FTPCamera", "DLink942");

            // begin connecting to the server
            client.Connect();

            var now = DateTime.Now;
            var catalog = now.ToString("yyyyMMdd");
            var subcatalog = new TimeSpan(now.Hour, now.Minute, now.Second).ToString("hh");

            // get a list of files and directories in the "/htdocs" folder

            if (client.DirectoryExists($"/Motion/{catalog}/{subcatalog}"))
            {
                foreach (FtpListItem item in client.GetListing($"/Motion/{catalog}/{subcatalog}"))
                {
                    // if this is a file
                    if (item.Type == FtpFileSystemObjectType.File)
                    {
                        // get the file size
                        return new JsonResult(item.Name);
                    }
                }
            }

            return new JsonResult(null);
        }
    }
}