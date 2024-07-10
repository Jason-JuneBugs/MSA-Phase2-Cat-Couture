using Microsoft.EntityFrameworkCore;
using Models;

namespace Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductContext _context;

        public ProductRepository(ProductContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await _context.Products.ToListAsync();

        }


        // public async Task<IEnumerable<ProductDto>> GetAllProductsAsync()
        // {
        //     return await _context.Products
        // .Include(p => p.ProductCategory) // Include the related ProductCategory
        // .Include(p => p.ProductImage)
        // .Select(p => new ProductDto
        // {
        //     Id = p.Id,
        //     Name = p.Name,
        //     Description = p.Description,
        //     Price = p.Price,
        //     CategoryName = p.ProductCategory.Name,// Retrieve the Name column from ProductCategory table
        //     ImageName = p.ProductImage.Name,
        //     ImageDescription = p.ProductImage.Description,

        // })
        // .ToListAsync();
        // }


        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products.FindAsync(id);

        }


        // public async Task AddProductAsync(Product product)
        // {
        //     _context.Products.Add(product);
        //     await _context.SaveChangesAsync();
        // }
        public async Task<Product> AddProductAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }


        public async Task UpdateProductAsync(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }


        public async Task DeleteProductAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
            }
        }


        public async Task<bool> ProductExistsAsync(int id)
        {
            return await _context.Products.AnyAsync(e => e.Id == id);
        }

        public async Task BulkAddProductsAsync(IEnumerable<Product> products)
        {
            await _context.Products.AddRangeAsync(products);
            await _context.SaveChangesAsync();
        }
    }
}
