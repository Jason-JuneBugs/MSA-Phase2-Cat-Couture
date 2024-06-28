using Models;

namespace Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(long id);
        Task AddProductAsync(Product product);
        Task UpdateProductAsync(Product product);
        Task DeleteProductAsync(long id);
        Task<bool> ProductExistsAsync(long id);
        Task BulkAddProductsAsync(IEnumerable<Product> products);
    }
}
