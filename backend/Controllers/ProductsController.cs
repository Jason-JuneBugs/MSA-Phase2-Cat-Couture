using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _repository;

        public ProductsController(IProductRepository repository)
        {
            _repository = repository;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await _repository.GetAllProductsAsync();
            return Ok(products);
        }

        // GET: api/products/id
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(long id)
        {
            var product = await _repository.GetProductByIdAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // PUT: api/products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Putproduct(long id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.UpdateProductAsync(product);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _repository.ProductExistsAsync(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<Product>> PostStudent(Product product)
        {
            await _repository.AddProductAsync(product);
            return CreatedAtAction("GetStudent", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(long id)
        {
            var product = await _repository.GetProductByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            await _repository.DeleteProductAsync(id);

            return NoContent();
        }

        // POST: api/Products/bulk
        [HttpPost("bulk")]
        public async Task<ActionResult<IEnumerable<Product>>> BulkCreateProducts(IEnumerable<Product> products)
        {
            if (products == null || !products.Any())
            {
                return BadRequest("Product data is required.");
            }

            await _repository.BulkAddProductsAsync(products);

            return Ok(products);
        }
    }
}