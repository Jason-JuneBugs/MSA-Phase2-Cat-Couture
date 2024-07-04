using Models;

namespace Repositories
{
    public interface IProductRepository
    {
        // Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<IEnumerable<ProductDto>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(int id);
        Task AddProductAsync(Product product);
        Task UpdateProductAsync(Product product);
        Task DeleteProductAsync(int id);
        Task<bool> ProductExistsAsync(int id);
        Task BulkAddProductsAsync(IEnumerable<Product> products);
    }
}
