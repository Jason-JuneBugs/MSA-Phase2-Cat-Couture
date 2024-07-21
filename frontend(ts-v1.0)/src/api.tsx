// const api = {
//   // getProducts: async () =>
//   //   // await fetch(`${process.env.REACT_APP_API_URL}/products?page=${page}`),
//   //   await fetch(`${process.env.REACT_APP_API_URL}/products`),
//   getProducts: async () => {
//     try {
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
//       if (!response.ok) {
//         throw new Error("Network response was not OK");
//       }
//       return response;
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       // Handle the error (e.g., show an error message to the user)
//       // You can also return a default value or an empty array here
//       return null;
//     }
//   },

//   // getProductById: async (productId) =>
//   //   // await fetch(`${process.env.REACT_APP_API_URL}/products?page=${page}`),
//   //   await fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`),
//   // getReports: async (accessToken) =>
//   //   await fetch(`${process.env.REACT_APP_API_URL}/reports`, {
//   //     method: "GET", //added
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Authorization: `Bearer ${accessToken}`,
//   //     },
//   //   }),
//   getProductById: async (productId) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/products/${productId}`
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not OK");
//       }
//       return response;
//     } catch (error) {
//       console.error("Error fetching product by ID:", error);
//       // Handle the error (e.g., show an error message to the user)
//       // You can also return a default value or null here
//       return null;
//     }
//   },

//   // postProduct: async (data) =>
//   //   await fetch(`${process.env.REACT_APP_API_URL}/products`, {
//   //     method: "POST",
//   //     body: data,
//   //   }),
//   postProduct: async (data) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/products`,
//         {
//           method: "POST",
//           body: data,
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not OK");
//       }
//       return response;
//     } catch (error) {
//       console.error("Error posting product:", error);
//       // Handle the error (e.g., show an error message to the user)
//       // You can also return null or a default response here
//       return null;
//     }
//   },

//   putProduct: async (productId, formData) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/products/${productId}`,
//         {
//           method: "PUT",
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         // Handle error cases (e.g., non-200 status codes)
//         throw new Error("Failed to update product");
//       }

//       // Product updated successfully
//       return response.json();
//     } catch (error) {
//       console.error("Error updating product:", error);
//       // Handle error (e.g., show an error message to the user)
//       throw error;
//     }
//   },

//   deleteProductById: async (productId) => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/products/${productId}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         // Handle error cases (e.g., non-200 status codes)
//         throw new Error("Failed to delete product");
//       }

//       // Product deleted successfully
//       console.log("Product deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       // Handle error (e.g., show an error message to the user)
//       throw error;
//     }
//   },
// };

// export default api;


const api = {
  getProducts: async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle the error (e.g., show an error message to the user)
      // You can also return a default value or an empty array here
      return null;
    }
  },

  getProductById: async (productId: number) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      // Handle the error (e.g., show an error message to the user)
      // You can also return a default value or null here
      return null;
    }
  },

  postProduct: async (data: any) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products`,
        {
          method: "POST",
          body: data,
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response;
    } catch (error) {
      console.error("Error posting product:", error);
      // Handle the error (e.g., show an error message to the user)
      // You can also return null or a default response here
      return null;
    }
  },

  putProduct: async (productId: number, formData: FormData) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${productId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        // Handle error cases (e.g., non-200 status codes)
        throw new Error("Failed to update product");
      }

      // Product updated successfully
      return response.json();
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle error (e.g., show an error message to the user)
      throw error;
    }
  },

  deleteProductById: async (productId: number) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        // Handle error cases (e.g., non-200 status codes)
        throw new Error("Failed to delete product");
      }

      // Product deleted successfully
      console.log("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle error (e.g., show an error message to the user)
      throw error;
    }
  },
};

export default api;
