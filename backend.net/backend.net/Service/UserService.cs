using backend.net.Model;
using backend.net.Model.DTOs;
using backend.net.Repository;
using BCrypt;
namespace backend.net.Service
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> Login(UserDto user)
        {
            var _user = _userRepository.GetByEmail(user.Email);

            if (BCrypt.Net.BCrypt.Verify(user.Password, _user!.Password) == false)
            {
                throw new Exception("Email does not exists!");
            }

            return _user;
        }

        public async Task<User> Register(UserDto user)
        {
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            return await _userRepository.Add(user);
        }

    }
}
