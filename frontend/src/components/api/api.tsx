 


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
        throw new Error("Failed to update product");
      }

      return response.json();
    } catch (error) {
      console.error("Error updating product:", error);
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
        throw new Error("Failed to delete product");
      }

      // Product deleted successfully
      console.log("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
};

export default api;
