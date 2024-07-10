using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class ProductDTO
    {

        public string? Name { get; set; }

        public string? Description { get; set; }

        [Column(TypeName = "money")]
        public decimal Price { get; set; }

        [Required]
        public IFormFile? ImageFile { get; set; }



    }
    public class ProductUpdateDTO
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? Name { get; set; }

        public string? Description { get; set; }

        [Column(TypeName = "money")]
        public decimal Price { get; set; }

        // [Required]
        [MaxLength(50)]
        public string? ImageName { get; set; }

        public IFormFile? ImageFile { get; set; }



    }


}
