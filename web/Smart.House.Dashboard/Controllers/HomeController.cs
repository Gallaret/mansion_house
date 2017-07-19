using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mansion.Core.User.Services;

namespace MansionDashboardNET.Controllers
{
    public class HomeController : Controller
    {
        private readonly UserService userService;
        public HomeController(UserService userService)
        {
            this.userService = userService;
        }

        public IActionResult Index()
        {
            var user = userService.CreateUser("test", "test1234");
            return View(user);
        }

        [Route("users")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Users()
        {
            var user = userService.CreateUser("test", "test1234");
            return Json(user);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
