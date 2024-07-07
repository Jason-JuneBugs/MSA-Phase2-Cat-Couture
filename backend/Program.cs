using backend.Data;
using Microsoft.EntityFrameworkCore;
using Models;
using Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();


// Configure DbContext before building the app
if (builder.Environment.IsDevelopment())
{
    // builder.Services.AddDbContext<StudentContext>(options =>
    //     options.UseInMemoryDatabase("Student"));

    // add ProductContext to the services
    // builder.Services.AddDbContext<ProductContext>(options =>
    //     options.UseInMemoryDatabase("Product"));

    // add ProductContext to the services using postgres
    builder.Services.AddDbContext<ProductContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("postgres")));

}
else
{
    builder.Services.AddDbContext<ProductContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("postgres")));
}

// builder.Services.AddScoped<IStudentRepository, StudentRepository>();
//Jason added
builder.Services.AddScoped<IProductRepository, ProductRepository>();
//

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable CORS
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.CreateDbIfNotExists();

app.Run();