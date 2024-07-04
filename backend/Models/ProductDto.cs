using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class ProductDto
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public string? Description { get; set; }

        [Column(TypeName = "money")]
        public decimal Price { get; set; }
        public string? CategoryName { get; set; }
        public string? ImageName { get; set; }
        public string? ImageDescription { get; set; }

    }


}
