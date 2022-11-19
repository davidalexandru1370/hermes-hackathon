using backend.net.Model;
using backend.net.Model.DTOs;
using backend.net.Service;
using backend.net.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace backend.net.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private IJwtUtilities _jwtUtilities;

        public UserController(IUserService userService, IJwtUtilities jwtUtilities)
        {
            _userService = userService;
            _jwtUtilities = jwtUtilities;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(UserDto user)
        {
            User _user;
            try
            {
                _user = await _userService.Login(user);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }

            return Ok(_jwtUtilities.GenerateJwtToken(_user, 10080));
        }


        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(UserDto user)
        {
            User _user;
            try
            {
                _user = await _userService.Register(user);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }

            return Ok(_jwtUtilities.GenerateJwtToken(_user, 10080));
        }
    }
}
