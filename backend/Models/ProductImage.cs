using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class ProductImage
    {
        // [Key]
        // public int Id { get; set; }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)] // Adjust the maximum length as needed
        public string? Name { get; set; }

        [MaxLength(500)] // Adjust the maximum length for description
        public string? Description { get; set; }
    }
}