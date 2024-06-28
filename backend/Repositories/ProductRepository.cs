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
            return await _context.Product.ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(long id)
        {
            return await _context.Product.FindAsync(id);
        }

        public async Task AddProductAsync(Product product)
        {
            _context.Product.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProductAsync(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProductAsync(long id)
        {
            var product = await _context.Product.FindAsync(id);
            if (product != null)
            {
                _context.Product.Remove(product);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> ProductExistsAsync(long id)
        {
            return await _context.Product.AnyAsync(e => e.Id == id);
        }

        public async Task BulkAddProductsAsync(IEnumerable<Product> products)
        {
            await _context.Product.AddRangeAsync(products);
            await _context.SaveChangesAsync();
        }
    }
}
