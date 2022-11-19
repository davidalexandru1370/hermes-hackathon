using backend.net.Model;

namespace backend.net.Utilities
{
    public interface IJwtUtilities
    {
        public string GenerateJwtToken(User user, int expiredTimeInMinutes);
    }
}
