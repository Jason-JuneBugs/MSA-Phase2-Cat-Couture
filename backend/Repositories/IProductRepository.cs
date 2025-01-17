using Models;

namespace Repositories
{
    public interface IProductRepository
    {
        // Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(int id);
        // Task AddProductAsync(Product product);
        Task<Product> AddProductAsync(Product product);
        // Task UpdateProductAsync(Product product);
        Task<Product> UpdateProductAsync(Product product);
        Task DeleteProductAsync(int id);
        Task<bool> ProductExistsAsync(int id);
        Task BulkAddProductsAsync(IEnumerable<Product> products);
    }
}
