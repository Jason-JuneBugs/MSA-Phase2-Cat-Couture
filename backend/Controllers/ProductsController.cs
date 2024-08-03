using Microsoft.AspNetCore.Mvc;
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



        //GET: api/Products
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


        //PUT: api/products/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, [FromForm] ProductUpdateDTO productToUpdate)
        {
            try
            {
                if (id != productToUpdate.Id)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, $"id in url and form body does not match.");
                }

                var existingProduct = await _repository.GetProductByIdAsync(id);
                if (existingProduct == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, $"Product with id: {id} does not found");
                }
                string oldImageName = existingProduct.ImageName;

                if (productToUpdate.ImageFile != null)
                {
                    if (productToUpdate.ImageFile?.Length > 1 * 1024 * 1024)
                    {
                        return StatusCode(StatusCodes.Status400BadRequest, "File size should not exceed 1 MB");
                    }
                    string[] allowedFileExtentions = [".jpg", ".jpeg", ".png"];
                    string createdImageName = await _fileService.SaveFileAsync(productToUpdate.ImageFile, allowedFileExtentions);
                    productToUpdate.ImageName = createdImageName;
                }

                // mapping `ProductDTO` to `Product` manually. You can use automapper.
                existingProduct.Id = productToUpdate.Id;
                existingProduct.Name = productToUpdate.Name;
                existingProduct.Description = productToUpdate.Description;
                existingProduct.ImageName = productToUpdate.ImageName;
                existingProduct.Price = productToUpdate.Price;

                var updatedProduct = await _repository.UpdateProductAsync(existingProduct);

                // if image is updated, then we have to delete old image from directory
                if (productToUpdate.ImageFile != null)
                    _fileService.DeleteFile(oldImageName);
                else if (oldImageName != productToUpdate.ImageName)
                {
                    string[] allowedFileExtentions = [".jpg", ".jpeg", ".png"];
                    _fileService.UpdateFileName(oldImageName, productToUpdate.ImageName, allowedFileExtentions);
                }


                return Ok(updatedProduct);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }


        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                var existingProduct = await _repository.GetProductByIdAsync(id);
                if (existingProduct == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, $"Product with id: {id} does not found");
                }

                await _repository.DeleteProductAsync(id);
                // After deleting product from database,remove file from directory.
                _fileService.DeleteFile(existingProduct.ImageName);
                return NoContent();  // return 204
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
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