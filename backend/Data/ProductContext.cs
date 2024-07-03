using Microsoft.EntityFrameworkCore;

public class ProductContext : DbContext
{
    public ProductContext(DbContextOptions<ProductContext> options)
           : base(options)
    {
    }
    public DbSet<Models.Product> Products { get; set; } = default!;
    public DbSet<Models.ProductCategory> ProductCategories { get; set; } = default!;
    public DbSet<Models.ProductImage> ProductImages { get; set; } = default!;
}