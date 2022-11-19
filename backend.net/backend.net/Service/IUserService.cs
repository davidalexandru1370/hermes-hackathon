using backend.net.Model;
using backend.net.Model.DTOs;

namespace backend.net.Service
{
    public interface IUserService
    {
        public Task<User> Login(UserDto user);

        public Task Register(UserDto user);

    }
}
