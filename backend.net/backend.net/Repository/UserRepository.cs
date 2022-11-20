using backend.net.Exceptions;
using backend.net.Model;
using backend.net.Model.DTOs;
using Microsoft.EntityFrameworkCore;

namespace backend.net.Repository
{
    public class UserRepository : IUserRepository
    {
        private EntitiesDbContext _dbContext;

        public UserRepository(EntitiesDbContext entitiesDbContext)
        {
            _dbContext = entitiesDbContext;
        }

        public async Task<User> Add(UserDto user)
        {
            var alreadyExistingUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (alreadyExistingUser is not null)
            {
                throw new Exception("Email already exists!");
            }

            User createdUser = new User
            {
                Email = user.Email,
                Password = user.Password
            };

            await _dbContext.AddAsync(createdUser);

            await _dbContext.SaveChangesAsync();
            
            return createdUser;
        }

        public List<User> GetAllUsers()
        {
            return _dbContext.Users.ToList();
        }

        public User? GetByEmail(string email)
        {
            User? user = _dbContext.Users.FirstOrDefault(u => u.Email == email);

            if (user == null)
            {
                throw new RepositoryException("Email does not exist");
            }

            return user;
        }
    }
}
