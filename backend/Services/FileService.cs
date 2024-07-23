// using Microsoft.AspNetCore.Hosting;
// using Microsoft.AspNetCore.Http;

namespace Services;

public interface IFileService
{
    Task<string> SaveFileAsync(IFormFile imageFile, string[] allowedFileExtensions);
    void DeleteFile(string fileNameWithExtension);
    void UpdateFileName(string ImageName, string[] allowedFileExtensions);
}

public class FileService(IWebHostEnvironment environment) : IFileService
{

    public async Task<string> SaveFileAsync(IFormFile imageFile, string[] allowedFileExtensions)
    {
        if (imageFile == null)
        {
            throw new ArgumentNullException(nameof(imageFile));
        }

        var contentPath = environment.ContentRootPath;
        var parentPath = Directory.GetParent(contentPath)?.FullName;
        var path = Path.Combine(parentPath, "frontend", "public", "img");


        if (!Directory.Exists(path))
        {
            Directory.CreateDirectory(path);
        }

        // Check the allowed extenstions
        var ext = Path.GetExtension(imageFile.FileName);
        if (!allowedFileExtensions.Contains(ext))
        {
            throw new ArgumentException($"Only {string.Join(",", allowedFileExtensions)} are allowed.");
        }

        // generate a unique filename
        var fileName = $"{Guid.NewGuid().ToString()}{ext}";
        var fileNameWithPath = Path.Combine(path, fileName);
        using var stream = new FileStream(fileNameWithPath, FileMode.Create);
        await imageFile.CopyToAsync(stream);
        return fileName;
    }

    public void UpdateFileName(string imageName, string[] allowedFileExtensions)
    {
        if (imageName is null)
        {
            // Handle the error (e.g., throw an exception).
        }

        var contentPath = environment.ContentRootPath;
        var parentPath = Directory.GetParent(contentPath)?.FullName;
        var path = Path.Combine(parentPath, "frontend", "public", "img");

        if (!Directory.Exists(path))
        {
            Directory.CreateDirectory(path);
        }

        // Check if the file extension is allowed
        var ext = Path.GetExtension(imageName);
        if (!allowedFileExtensions.Contains(ext))
        {
            throw new ArgumentException($"Only {string.Join(",", allowedFileExtensions)} are allowed.");
        }

        // Generate a unique filename
        var fileName = imageName;
        var fileNameWithPath = Path.Combine(path, fileName);
        using var stream = new FileStream(fileNameWithPath, FileMode.Create);
    }


    public void DeleteFile(string fileNameWithExtension)
    {
        if (string.IsNullOrEmpty(fileNameWithExtension))
        {
            throw new ArgumentNullException(nameof(fileNameWithExtension));
        }
        // var contentPath = environment.ContentRootPath;
        // var path = Path.Combine(contentPath, $"Uploads", fileNameWithExtension);
        var contentPath = environment.ContentRootPath;
        var parentPath = Directory.GetParent(contentPath)?.FullName;
        var path = Path.Combine(parentPath, "frontend", "public", "img", fileNameWithExtension);


        if (!File.Exists(path))
        {
            throw new FileNotFoundException($"Invalid file path!");
        }
        File.Delete(path);
    }

}