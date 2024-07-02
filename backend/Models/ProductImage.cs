using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class ProductImage
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)] // Adjust the maximum length as needed
        public string? Name { get; set; }

        [MaxLength(500)] // Adjust the maximum length for description
        public string? Description { get; set; }
    }
}