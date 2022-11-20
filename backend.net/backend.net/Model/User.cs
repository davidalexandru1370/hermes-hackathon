using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.net.Model
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }

        [Required(ErrorMessage ="Password cannot be empty!")]
        [Column(TypeName="nvarchar(MAX)")]
        public string Email { get; set; }

        [Required]
        [Column(TypeName ="nvarchar(250)")]

        public string Password { get; set; }
    }
}
