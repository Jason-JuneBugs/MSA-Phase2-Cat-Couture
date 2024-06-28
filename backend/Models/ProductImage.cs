using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class ProductImage
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(10)] // Adjust the maximum length as needed
        public string? Name { get; set; }

        [MaxLength(50)] // Adjust the maximum length for description
        public string? Description { get; set; }
    }
}