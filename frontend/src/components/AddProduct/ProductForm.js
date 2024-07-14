import React, { useState } from "react";
import api from "../../api";
// function ProductForm() {
const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "imageFile" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product data:", product);

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("imageFile", product.imageFile);

    try {
      // const response = await fetch("/api/products", {
      // const response = await fetch(
      //   `${process.env.REACT_APP_API_URL}/products`,
      //   {
      //     method: "POST",
      //     body: formData,
      //   }
      // );
      const response = await api.postProduct(formData);

      if (response.ok) {
        // Handle success (e.g., show a success message)
      } else {
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          // type="number"
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          name="imageFile"
          accept=".jpg, .jpeg, .png"
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
