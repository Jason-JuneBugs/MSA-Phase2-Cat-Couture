# Backend

This README provides instructions on how to run the backend of the web application. The backend is built using .NET with Entity Framework Core.

## Prerequisites

- .NET SDK (version 6.0 or higher)
- Visual Studio or Visual Studio Code

## Project Structure

Here is an overview of the key directories and files in the project:

- `backend/`: Root directory of the backend application.
  - `Controllers/`: Contains API controllers.
    - `ProductsController.cs`: Controller for handling products-related API endpoints.
  - `Data/`: Contains the Entity Framework Core data context.
    - `ProductContext.cs`: EF Core data context for students.
  - `Models/`: Contains data models.
    - `Product.cs`: Data model for a student.
  - `Repositories/`: Contains repository interfaces and implementations.
    - `IProductRepository.cs`: Interface for the student repository.
    - `ProductRepository.cs`: Implementation of the student repository.
  - `Program.cs`: Entry point of the application.
  - `appsettings.json`: Configuration file for the application settings.

## Running the Project

1. Restore dependencies:
   `dotnet Restore`

2. Run the project:
   `dotnet run`

3. URLs:
   `/api/products`
   `/swagger/index.html`
