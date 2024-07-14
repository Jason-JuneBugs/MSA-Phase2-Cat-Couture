const api = {
  getProducts: async (page) =>
    // await fetch(`${process.env.REACT_APP_API_URL}/products?page=${page}`),
    await fetch(`${process.env.REACT_APP_API_URL}/products`),
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
};

export default api;
