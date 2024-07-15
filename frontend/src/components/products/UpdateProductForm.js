import React, { useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";

// function ProductForm() {
const UpdateProductForm = () => {
  const { id } = useParams();
  console.log("passed in id is", id);
  const [product, setProduct] = useState({
    id: parseInt(id, 10),
    name: "",
    description: "",
    price: "",
    imageName: "",
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
    formData.append("id", product.id);
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("imageName", product.imageName);
    formData.append("imageFile", product.imageFile);

    try {
      const response = await api.putProduct(product.id, formData);

      if (response.ok) {
        console.log("The product has been updated successfully");
      } else {
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error sending PUT request:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Id:
        <input
          type="number"
          name="id"
          value={product.id}
          onChange={handleInputChange}
        />
      </label>
      <br />
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
      <br></br>
      <label>
        Image Name:
        <input
          type="text"
          name="imageName"
          value={product.imageName}
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

export default UpdateProductForm;
