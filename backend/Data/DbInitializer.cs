using Models;

namespace backend.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ProductContext context)
        {

            if (context.Products.Any())
            {
                return;   // DB has been seeded
            }

            var products = new Product[]
            {
                new Product
                    {
                        Name = "Angel Wings Harness",
                        Description = "The purrrfect accessory to take your kitty to the next level.",
                        Price = 10,
                        ImageName = "cat-photo_0000.jpg",
                    },
                new Product
                    {
                        // Id = 2,
                        Name = "Deluxe Carry Bag Orange",
                        Description = "Backpack-style carry bag with dome.",
                        Price = 20,
                        ImageName = "cat-photo_0001.jpg"
                    },
                new Product
                    {
                        // Id = 3,
                        Name = "KittyLove Apron Red",
                        Description = "Puff-look apron to protect against dinner time oopsies.",
                        Price = 15,
                        ImageName = "cat-photo_0002.jpg"
                    },
                new Product
                {
                    // Id = 4,
                    Name = "Outta Space Dome Carry Bag Yellow",
                    Description = "Dome-style re-inforced plastic carry bag.",
                    Price = 30,
                    ImageName = "cat-photo_0003.jpg"
                },
                new Product
                {
                    // Id = 5,
                    Name = "McMeowful Soft Bow Collar Baby Pink",
                    Description = "Hypo-allergenic bow with ultrasoft-style security clip for extra comfort.",
                    Price = 40,
                    ImageName = "cat-photo_0004.jpg"
                },
                new Product
                {
                    // Id = 6,
                    Name = "Jumper Grandad-style Grey",
                    Description = "Grandad-style jumper from soft merino wool with button-style clips.",
                    Price = 5,
                    ImageName = "cat-photo_0005.jpg"
                },
                new Product
                {
                    // Id = 7,
                    Name = "PartyTime Soldier Outfit Khaki",
                    Description = "Party-style soldier outfit, one size fits all.",
                    Price = 100,
                    ImageName = "cat-photo_0006.jpg"
                },
                new Product
                {
                    // Id = 8,
                    Name = "PartyTime Sailor Outfit Small",
                    Description = "Party-style sailor outfit, size small.",
                    Price = 70,
                    ImageName = "cat-photo_0007.jpg"
                },
                new Product
                {
                    // Id = 9,
                    Name = "Angel Wings",
                    Description = "The purrrfect accessory to take your kitty to the next level.",
                    Price = 10,
                    ImageName = "cat-photo_0008.jpg"
                },
                new Product
                {
                    // Id = 10,
                    Name = "Deluxe Carry Bag Red",
                    Description = "Backpack-style carry bag with dome.",
                    Price = 20,
                    ImageName = "cat-photo_0009.jpg"
                }
            };
            context.Products.AddRange(products);
            context.SaveChanges();

        }
    }


}