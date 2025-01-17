 


import React, { useState } from "react";
import { TextField, Button } from "@mui/material"; // Import MUI components
import api from "../api/api";
import { Box } from "@mui/system";

const AddProductForm: React.FC = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageFile: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "imageFile" ? files?.[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product data:", product);

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    if (product.imageFile !== null) {
      formData.append("imageFile", product.imageFile);
    }

    try {
      const response = await api.postProduct(formData);

      if (response?.ok) {
        // Handle success (e.g., show a success message)
      } else {
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  return (
   <Box mt={2} >
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Description"
        multiline
        name="description"
        value={product.description}
        onChange={handleInputChange}
        fullWidth
      />
      <TextField
        label="Price"
        type="number"
        name="price"
        value={product.price}
        onChange={handleInputChange}
        fullWidth
      />
      <input
        type="file"
        name="imageFile"
        accept=".jpg, .jpeg, .png"
        onChange={handleInputChange}
      />
      <Box mt={4}  >
        <Button type="submit" variant="contained" color="primary" >
           Submit
        </Button>
      </Box>
    </form>
 
  </Box>
  );
};

export default AddProductForm;
