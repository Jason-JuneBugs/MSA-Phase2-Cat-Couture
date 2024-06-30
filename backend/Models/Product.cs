using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public string? Description { get; set; }

        [Column(TypeName = "money")]
        public decimal Price { get; set; }

        [ForeignKey("ProductCategory")]
        public int ProductCategoryId { get; set; }
        public ProductCategory ProductCategory { get; set; }

        [ForeignKey("ProductImage")]
        public int? ProductImageId { get; set; }
        public ProductImage ProductImage { get; set; }
    }


}