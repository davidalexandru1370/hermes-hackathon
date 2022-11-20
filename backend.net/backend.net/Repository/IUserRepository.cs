using backend.net.Model;
using backend.net.Model.DTOs;

namespace backend.net.Repository
{
    public interface IUserRepository
    {
        public Task<User> Add(UserDto user);

        public List<User> GetAllUsers();

        public User? GetByEmail(string email);
    }
}
