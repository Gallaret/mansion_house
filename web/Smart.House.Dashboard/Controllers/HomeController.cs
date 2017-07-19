using Microsoft.AspNetCore.Mvc;
using Smart.House.Domain.Services;

namespace Smart.House.Dashboard.Controllers
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
