const api = {
  getProducts: async () =>
    // await fetch(`${process.env.REACT_APP_API_URL}/products?page=${page}`),
    await fetch(`${process.env.REACT_APP_API_URL}/products`),
  getProductById: async (productId) =>
    // await fetch(`${process.env.REACT_APP_API_URL}/products?page=${page}`),
    await fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`),
  getReports: async (accessToken) =>
    await fetch(`${process.env.REACT_APP_API_URL}/reports`, {
      method: "GET", //added
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  postProduct: async (data) =>
    await fetch(`${process.env.REACT_APP_API_URL}/products`, {
      method: "POST",
      body: data,
    }),

  // putProduct: async (id, updatedData) => {
  //   try {
  //     // Logic for updating a product (e.g., PUT request to the backend)
  //     await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
  //       method: "PUT",
  //       // body: JSON.stringify(updatedData),
  //       body: updatedData,
  //     });
  //     // Handle success (e.g., show a success message)
  //     console.log("Product updated successfully!");
  //   } catch (error) {
  //     // Handle any errors (e.g., show an error message)
  //     console.error("Error updating product:", error);
  //   }
  // },
  putProduct: async (productId, formData) => {
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
};

export default api;
