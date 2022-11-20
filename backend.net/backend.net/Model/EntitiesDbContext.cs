using Microsoft.EntityFrameworkCore;

namespace backend.net.Model
{
    public class EntitiesDbContext : DbContext
    {
        public virtual DbSet<User> Users { get; set; }

        public EntitiesDbContext(DbContextOptions<EntitiesDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
