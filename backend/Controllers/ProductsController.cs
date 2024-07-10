using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;
using Services;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    // public class ProductsController(IFileService fileService, IProductRepository productRepo, ILogger<ProductController> logger) : ControllerBase
    {
        private readonly IProductRepository _repository;
        private readonly IFileService _fileService;
        private readonly ILogger _logger;


        // public ProductsController(IProductRepository repository)
        public ProductsController(IFileService fileService, IProductRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _fileService = fileService;
            _logger = logger;
        }

        // POST: api/Products
        [HttpPost]
        public async Task<IActionResult> PostProduct([FromForm] ProductDTO productToAdd)
        {
            try
            {
                if (productToAdd.ImageFile?.Length > 1 * 1024 * 1024)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, "File size should not exceed 1 MB");
                }
                string[] allowedFileExtentions = [".jpg", ".jpeg", ".png"];
                string createdImageName = await _fileService.SaveFileAsync(productToAdd.ImageFile, allowedFileExtentions);

                // mapping `ProductDTO` to `Product` manually. You can use automapper.
                var product = new Product
                {
                    Name = productToAdd.Name,
                    Description = productToAdd.Description,
                    Price = productToAdd.Price,
                    ImageName = createdImageName
                };
                var createdProduct = await _repository.AddProductAsync(product);
                return CreatedAtAction(nameof(PostProduct), createdProduct);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
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
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _repository.GetProductByIdAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        //PUT: api/products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
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
        // [HttpPut("{id}")]
        // public async Task<IActionResult> PutProduct(int id, Product product)
        // {
        //     if (id != product.Id)
        //     {
        //         return BadRequest();
        //     }

        //     try
        //     {
        //         // Retrieve the existing product (if needed)
        //         var existingProduct = await _repository.GetProductByIdAsync(id);
        //         if (existingProduct == null)
        //         {
        //             return NotFound();
        //         }

        //         // Update properties of the existing product
        //         existingProduct.Name = product.Name;
        //         existingProduct.Description = product.Description;
        //         existingProduct.Price = product.Price;

        //         //
        //         existingProduct.ProductCategoryId = product.ProductCategoryId;

        //         // Update the product category (if applicable)
        //         if (product.ProductCategoryId.HasValue)
        //         {
        //             // Retrieve the existing category (if needed)
        //             var existingCategory = await _repository.GetProductCategoryByIdAsync(product.ProductCategoryId.Value);
        //             if (existingCategory != null)
        //             {
        //                 existingProduct.ProductCategory = existingCategory;
        //             }
        //         }

        //         // Save changes
        //         await _repository.UpdateProductAsync(existingProduct);

        //         return NoContent();
        //     }
        //     catch (DbUpdateConcurrencyException)
        //     {
        //         return NotFound();
        //     }
        // }




        // POST: api/Products
        // [HttpPost]
        // public async Task<ActionResult<Product>> PostProduct(Product product)
        // {
        //     await _repository.AddProductAsync(product);
        //     return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        // }





        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
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