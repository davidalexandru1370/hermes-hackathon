using backend.net.Model.DTOs;

namespace backend.net.Service
{
    public interface IUserService
    {
        public Task Login(UserDto user);

        public Task Register(UserDto user);

    }
}
