using Models;

namespace backend.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ProductContext context)
        {

            if (context.Product.Any())
            // && context.productCategory.Any()
            // && context.productImage.Any())
            {
                return;   // DB has been seeded
            }

            // var pepperoniTopping = new Topping { Name = "Pepperoni", Calories = 130 };
            // var sausageTopping = new Topping { Name = "Sausage", Calories = 100 };
            // var hamTopping = new Topping { Name = "Ham", Calories = 70 };
            // var chickenTopping = new Topping { Name = "Chicken", Calories = 50 };
            // var pineappleTopping = new Topping { Name = "Pineapple", Calories = 75 };

            // var tomatoSauce = new Sauce { Name = "Tomato", IsVegan = true };
            // var alfredoSauce = new Sauce { Name = "Alfredo", IsVegan = false };

            var products = new Product[]
            {
                new Product
                    {
                        Name = "Product sample 1",
                        Description = "producr description 1",
                        Price = 109,

                    },
                 new Product
                    {
                        Name = "Product sample 2",
                        Description = "producr description 2",
                        Price = 209,

                    },
            };

            context.Product.AddRange(products);
            context.SaveChanges();
        }
    }
}