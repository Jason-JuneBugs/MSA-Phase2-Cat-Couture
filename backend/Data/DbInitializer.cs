using Models;

namespace backend.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ProductContext context)
        {

            if (context.Products.Any()
            && context.ProductCategories.Any()
            && context.ProductImages.Any())
            {
                return;   // DB has been seeded
            }

            var products = new Product[]
            {
                new Product
                    {
                        Id = 1,
                        Name = "Angel Wings Harness",
                        Description = "The purrrfect accessory to take your kitty to the next level.",
                        Price = 10,
                        ProductCategoryId = 4,
                        ProductImageId = 1
                    },
                new Product
                    {
                        Id = 2,
                        Name = "Deluxe Carry Bag Orange",
                        Description = "Backpack-style carry bag with dome.",
                        Price = 20,
                        ProductCategoryId = 4,
                        ProductImageId = 2
                    },
                new Product
                    {
                        Id = 3,
                        Name = "KittyLove Apron Red",
                        Description = "Puff-look apron to protect against dinner time oopsies.",
                        Price = 15,
                        ProductCategoryId = 4,
                        ProductImageId = 3
                    },
                new Product
                {
                    Id = 4,
                    Name = "Outta Space Dome Carry Bag Yellow",
                    Description = "Dome-style re-inforced plastic carry bag.",
                    Price = 30,
                    ProductCategoryId = 4,
                    ProductImageId = 4
                },
                new Product
                {
                    Id = 5,
                    Name = "McMeowful Soft Bow Collar Baby Pink",
                    Description = "Hypo-allergenic bow with ultrasoft-style security clip for extra comfort.",
                    Price = 40,
                    ProductCategoryId = 4,
                    ProductImageId = 5
                },
                new Product
                {
                    Id = 6,
                    Name = "Jumper Grandad-style Grey",
                    Description = "Grandad-style jumper from soft merino wool with button-style clips.",
                    Price = 5,
                    ProductCategoryId = 1,
                    ProductImageId = 6
                },
                new Product
                {
                    Id = 7,
                    Name = "PartyTime Soldier Outfit Khaki",
                    Description = "Party-style soldier outfit, one size fits all.",
                    Price = 100,
                    ProductCategoryId = 5,
                    ProductImageId = 7
                },
                new Product
                {
                    Id = 8,
                    Name = "PartyTime Sailor Outfit Small",
                    Description = "Party-style sailor outfit, size small.",
                    Price = 70,
                    ProductCategoryId = 5,
                    ProductImageId = 8
                },
                new Product
                {
                    Id = 9,
                    Name = "Angel Wings",
                    Description = "The purrrfect accessory to take your kitty to the next level.",
                    Price = 10,
                    ProductCategoryId = 4,
                    ProductImageId = 16
                },
                new Product
                {
                    Id = 10,
                    Name = "Deluxe Carry Bag Red",
                    Description = "Backpack-style carry bag with dome.",
                    Price = 20,
                    ProductCategoryId = 4,
                    ProductImageId = 9
                },
                new Product
                {
                    Id = 11,
                    Name = "KittyLove Apron Orange",
                    Description = "Puff-look apron to protect against dinner time oopsies.",
                    Price = 15,
                    ProductCategoryId = 4,
                    ProductImageId = 10
                },
                new Product
                {
                    Id = 12,
                    Name = "Outta Space Dome Carry Bag Green",
                    Description = "Dome-style re-inforced plastic carry bag.",
                    Price = 30,
                    ProductCategoryId = 4,
                    ProductImageId = 11
                },
                new Product
                {
                    Id = 13,
                    Name = "McMeowful Soft Bow Collar Baby Purple",
                    Description = "Hypo-allergenic bow with ultrasoft-style security clip for extra comfort.",
                    Price = 40,
                    ProductCategoryId = 4,
                    ProductImageId = 12
                },
                new Product
                {
                    Id = 14,
                    Name = "Jumper Grandad-style Black",
                    Description = "Grandad-style jumper from soft merino wool with button-style clips.",
                    Price = 5,
                    ProductCategoryId = 1,
                    ProductImageId = 14
                },
                 new Product
                {
                    Id = 15,
                    Name = "PartyTime Soldier Outfit Red",
                    Description = "Party-style soldier outfit, one size fits all.",
                    Price = 100,
                    ProductCategoryId = 5,
                    ProductImageId = 15
                },
                new Product
                {
                    Id = 16,
                    Name = "PartyTime Sailor Outfit Medium",
                    Description = "Party-style sailor outfit, size medium.",
                    Price = 70,
                    ProductCategoryId = 5,
                    ProductImageId = 7
                },
                new Product
                {
                    Id = 17,
                    Name = "McMeowful Soft Bow Collar Baby Blue",
                    Description = "Hypo-allergenic bow with ultrasoft-style security clip for extra comfort.",
                    Price = 40,
                    ProductCategoryId = 4,
                    ProductImageId = 17
                },
                new Product
                {
                    Id = 18,
                    Name = "Jumper Grandad-style Blue",
                    Description = "Grandad-style jumper from soft merino wool with button-style clips.",
                    Price = 5,
                    ProductCategoryId = 1,
                    ProductImageId = 18
                },
                new Product
                {
                    Id = 19,
                    Name = "PartyTime Soldier Outfit Pink",
                    Description = "Party-style soldier outfit, one size fits all.",
                    Price = 100,
                    ProductCategoryId = 5,
                    ProductImageId = 20
                },
                new Product
                {
                    Id = 20,
                    Name = "PartyTime Sailor Outfit Large",
                    Description = "Party-style sailor outfit, size large.",
                    Price = 70,
                    ProductCategoryId = 5,
                    ProductImageId = 19
                },
                new Product
                {
                    Id = 21,
                    Name = "Angel Wings Harness Green",
                    Description = "The purrrfect accessory to take your kitty to the next level.",
                    Price = 10,
                    ProductCategoryId = 4,
                    ProductImageId = 21
                },
                new Product
                {
                    Id = 22,
                    Name = "Deluxe Carry Bag Blue",
                    Description = "Backpack-style carry bag with dome.",
                    Price = 20,
                    ProductCategoryId = 4,
                    ProductImageId = 22
                },
                new Product
                {
                    Id = 23,
                    Name = "KittyLove Apron Golden Sun",
                    Description = "Puff-look apron to protect against dinner time oopsies.",
                    Price = 15,
                    ProductCategoryId = 4,
                    ProductImageId = 23
                },
                new Product
                {
                    Id = 24,
                    Name = "Outta Space Dome Carry Bag Grape",
                    Description = "Dome-style re-inforced plastic carry bag.",
                    Price = 30,
                    ProductCategoryId = 4,
                    ProductImageId = 24
                },
                new Product
                {
                    Id = 25,
                    Name = "McMeowful Soft Bow Collar Tangerine",
                    Description = "Hypo-allergenic bow with ultrasoft-style security clip for extra comfort.",
                    Price = 40,
                    ProductCategoryId = 4,
                    ProductImageId = 25
                },
                new Product
                {
                    Id = 26,
                    Name = "Jumper Grandad-style Deep Purple",
                    Description = "Grandad-style jumper from soft merino wool with button-style clips.",
                    Price = 5,
                    ProductCategoryId = 1,
                    ProductImageId = 26
                },
                new Product
                {
                    Id = 27,
                    Name = "PartyTime Soldier Outfit Teal",
                    Description = "Party-style soldier outfit, one size fits all.",
                    Price = 100,
                    ProductCategoryId = 5,
                    ProductImageId = 27
                },
                new Product
                {
                    Id = 28,
                    Name = "PartyTime Sailor Outfit Gold",
                    Description = "Party-style sailor outfit, size small.",
                    Price = 70,
                    ProductCategoryId = 5,
                    ProductImageId = 28
                },
                new Product
                {
                    Id = 29,
                    Name = "Angel Wings Ivy",
                    Description = "The purrrfect accessory to take your kitty to the next level.",
                    Price = 10,
                    ProductCategoryId = 4,
                    ProductImageId = 29
                },
                new Product
                {
                    Id = 30,
                    Name = "Deluxe Carry Bag Magenta Dark",
                    Description = "Backpack-style carry bag with dome.",
                    Price = 20,
                    ProductCategoryId = 4,
                    ProductImageId = 30
                },
            };

            //add seeding productCategories data
            var productCategories = new ProductCategory[]
                {
                new ProductCategory
                    {
                        Id = 1,
                        Name = "Tops",
                    },
                new ProductCategory
                    {
                        Id = 2,
                        Name = "Hats",
                    },
                new ProductCategory
                    {
                        Id = 3,
                        Name = "Shoes",
                    },
                new ProductCategory
                    {
                        Id = 4,
                        Name = "Accessories",
                    },
                new ProductCategory
                    {
                        Id = 5,
                        Name = "Party outfits",
                    },
            };

            //add seeding productImages data
            var productImages = new ProductImage[]
                {
                new ProductImage
                    {
                        Id = 1,
                        Name = "cat-photo_0000.jpg",
                        Description="Wings harness"
                    },
                new ProductImage
                    {
                        Id = 2,
                        Name = "cat-photo_0001.jpg",
                        Description="Carry Bag Deluxe"
                    },
                new ProductImage
                    {
                        Id = 3,
                        Name = "cat-photo_0002.jpg",
                        Description="Apron"
                    },
                new ProductImage
                    {
                        Id = 4,
                        Name = "cat-photo_0003.jpg",
                        Description="Carry Bag Dome"
                    },
                new ProductImage
                    {
                        Id = 5,
                        Name = "cat-photo_0004.jpg",
                        Description="Stylish Bow Collar"
                    },
                new ProductImage
                    {
                        Id = 6,
                        Name = "cat-photo_0005.jpg",
                        Description="Jumper Grandad Style"
                    },
                new ProductImage
                    {
                        Id = 7,
                        Name = "cat-photo_0006.jpg",
                        Description="Soldier Outfit"
                    },
                new ProductImage
                    {
                        Id = 8,
                        Name = "cat-photo_0007.jpg",
                        Description="Sailor Outfit"
                    },
                new ProductImage
                    {
                        Id = 9,
                        Name = "cat-photo_0008.jpg",
                        Description="Carry Bag Deluxe"
                    },
                new ProductImage
                    {
                        Id = 10,
                        Name = "cat-photo_0009.jpg",
                        Description="Apron"
                    },
                new ProductImage
                    {
                        Id = 11,
                        Name = "cat-photo_0010.jpg",
                        Description="Carry Bag Dome"
                    },
                new ProductImage
                    {
                        Id = 12,
                        Name = "cat-photo_0011.jpg",
                        Description="Stylish Bow Collar"
                    },
                new ProductImage
                    {
                        Id = 13,
                        Name = "cat-photo_0012.jpg",
                        Description="Soldier Outfit"
                    },
                new ProductImage
                    {
                        Id = 14,
                        Name = "cat-photo_0013.jpg",
                        Description="Jumper Grandad Style"
                    },
                new ProductImage
                    {
                        Id = 15,
                        Name = "cat-photo_0014.jpg",
                        Description="Soldier Outfit"
                    },
                new ProductImage
                    {
                        Id = 16,
                        Name = "cat-photo_0015.jpg",
                        Description="Wings harness"
                    },
                new ProductImage
                    {
                        Id = 17,
                        Name = "cat-photo_0016.jpg",
                        Description="Stylish Bow Collar"
                    },
                new ProductImage
                    {
                        Id = 18,
                        Name = "cat-photo_0017.jpg",
                        Description="Jumper Grandad Style"
                    },
                new ProductImage
                    {
                        Id = 19,
                        Name = "cat-photo_0018.jpg",
                        Description="Sailor Outfit"
                    },
                new ProductImage
                    {
                        Id = 20,
                        Name = "cat-photo_0019.jpg",
                        Description="Soldier Outfit"
                    },
                new ProductImage
                    {
                        Id = 21,
                        Name = "cat-photo_0020.jpg",
                        Description="Wings harness"
                    },
                new ProductImage
                    {
                        Id = 22,
                        Name = "cat-photo_0021.jpg",
                        Description="Carry Bag Deluxe"
                    },
                new ProductImage
                    {
                        Id = 23,
                        Name = "cat-photo_0022.jpg",
                        Description="Apron"
                    },
                new ProductImage
                    {
                        Id = 24,
                        Name = "cat-photo_0023.jpg",
                        Description="Carry Bag Dome"
                    },
                new ProductImage
                    {
                        Id = 25,
                        Name = "cat-photo_0024.jpg",
                        Description="Stylish Bow Collar"
                    },
                new ProductImage
                    {
                        Id = 26,
                        Name = "cat-photo_0025.jpg",
                        Description="Jumper Grandad Style"
                    },
                new ProductImage
                    {
                        Id = 27,
                        Name = "cat-photo_0026.jpg",
                        Description="Soldier Outfit"
                    },
                new ProductImage
                    {
                        Id = 28,
                        Name = "cat-photo_0027.jpg",
                        Description="Sailor Outfit"
                    },
                new ProductImage
                    {
                        Id = 29,
                        Name = "cat-photo_0028.jpg",
                        Description="Wings harness"
                    },
                new ProductImage
                    {
                        Id = 30,
                        Name = "cat-photo_0029.jpg",
                        Description="Carry Bag Deluxe'"
                    },
            };



            context.Products.AddRange(products);
            context.ProductCategories.AddRange(productCategories);
            context.ProductImages.AddRange(productImages);

            context.SaveChanges();
        }


    }
}