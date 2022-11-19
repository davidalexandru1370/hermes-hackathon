using backend.net.Model.DTOs;
using backend.net.Service;
using Microsoft.AspNetCore.Mvc;

namespace backend.net.Controllers
{
    [ApiController]
    [Route("api/[/controller]")]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        public async Task<IActionResult> Login(UserDto user)
        {
            try
            {
                _userService.Login(user);
            }
            catch (Exception exception)
    {
                return BadRequest(exception.Message);
            }


            return Ok()
        }

    }
}
