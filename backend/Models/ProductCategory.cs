using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class ProductCategory
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)] // Adjust the maximum length as needed
        public string Name { get; set; }
    }
}


