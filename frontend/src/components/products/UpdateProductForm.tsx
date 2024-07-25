// import React, { useState, useEffect } from "react";
// import api from "../../api";
// import { useParams } from "react-router-dom";

// const UpdateProductForm = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({
//     id: parseInt(id, 10),
//     name: "",
//     description: "",
//     price: "",
//     imageName: "",
//     imageFile: null,
//   });

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         const response = await api.getProductById(id);
//         const result = await response.json();
//         setProduct({
//           ...product,
//           name: result.name,
//           description: result.description,
//           price: result.price,
//           imageName: result.imageName,
//         });
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//         // Handle error (e.g., show an error message)
//       }
//     };

//     fetchProductData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: name === "imageFile" ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Product data:", product);

//     const formData = new FormData();
//     formData.append("id", product.id);
//     formData.append("name", product.name);
//     formData.append("description", product.description);
//     formData.append("price", product.price);
//     formData.append("imageName", product.imageName);
//     formData.append("imageFile", product.imageFile);

//     try {
//       const response = await api.putProduct(product.id, formData);

//       if (response.ok) {
//         console.log("The product has been updated successfully");
//       } else {
//         // Handle error (e.g., show an error message)
//       }
//     } catch (error) {
//       console.error("Error sending PUT request:", error);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Id:
//         <input
//           type="number"
//           name="id"
//           value={product.id}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={product.name}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={product.description}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Price:
//         <input
//           // type="number"
//           type="number"
//           name="price"
//           value={product.price}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
//       <label>
//         Image Name:
//         <input
//           type="text"
//           name="imageName"
//           value={product.imageName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Image:
//         <input
//           type="file"
//           name="imageFile"
//           accept=".jpg, .jpeg, .png"
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UpdateProductForm;

///Original JS form
// import React, { useState, useEffect } from "react";
// import api from "../../api";
// import { useParams } from "react-router-dom";

// const UpdateProductForm: React.FC = () => {
//   const { id } = useParams<{ id?: string }>(); // Make id optional
//   const parsedId = parseInt(id || "0", 10); // Provide a default value (e.g., 0)

//   const [product, setProduct] = useState({
//     id: parsedId,
//     name: "",
//     description: "",
//     price: "",
//     imageName: "",
//     imageFile: null as File | null,
//   });

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         if (!isNaN(parsedId)) {
//           const response = await api.getProductById(parsedId);
//           if (response) {
//             const result = await response.json();
//             setProduct((prevProduct) => ({
//               ...prevProduct,
//               name: result.name,
//               description: result.description,
//               price: result.price,
//               imageName: result.imageName,
//             }));
//           } else {
//             console.error("Response is null.");
//             // Handle null response (e.g., show an error message)
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//         // Handle other errors (e.g., show an error message)
//       }
//     };

//     fetchProductData();
//   }, [parsedId]);

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   const { name, value, files } = e.target as HTMLInputElement; // Explicitly cast to HTMLInputElement
//   setProduct((prevProduct) => ({
//     ...prevProduct,
//     [name]: name === "imageFile" ? files?.[0] : value,
//   }));
// };


//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Product data:", product);

//     const formData = new FormData();
//     formData.append("id", product.id.toString());
//     formData.append("name", product.name);
//     formData.append("description", product.description);
//     formData.append("price", product.price);
//     formData.append("imageName", product.imageName);
//     if (product.imageFile) {
//       formData.append("imageFile", product.imageFile);
//     }

//     try {
//       const response = await api.putProduct(product.id, formData);

//       if (response.ok) {
//         console.log("The product has been updated successfully");
//       } else {
//         // Handle error (e.g., show an error message)
//       }
//     } catch (error) {
//       console.error("Error sending PUT request:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Id:
//         <input
//           type="number"
//           name="id"
//           value={product.id}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={product.name}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Description:
//         <textarea
//           name="description"
//           value={product.description}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Price:
//         <input
//           type="number"
//           name="price"
//           value={product.price}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br></br>
//       <label>
//         Image Name:
//         <input
//           type="text"
//           name="imageName"
//           value={product.imageName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Image:
//         <input
//           type="file"
//           name="imageFile"
//           accept=".jpg, .jpeg, .png"
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UpdateProductForm;



///Using MUI component

import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material"; // Import MUI components
import api from "../../api";
import { useParams } from "react-router-dom";

const UpdateProductForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const parsedId = parseInt(id || "0", 10);

  const [product, setProduct] = useState({
    id: parsedId,
    name: "",
    description: "",
    price: "",
    imageName: "",
    imageFile: null as File | null,
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (!isNaN(parsedId)) {
          const response = await api.getProductById(parsedId);
          if (response) {
            const result = await response.json();
            setProduct((prevProduct) => ({
              ...prevProduct,
              name: result.name,
              description: result.description,
              price: result.price,
              imageName: result.imageName,
            }));
          } else {
            console.error("Response is null.");
            // Handle null response (e.g., show an error message)
          }
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        // Handle other errors (e.g., show an error message)
      }
    };

    fetchProductData();
  }, [parsedId]);

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
    formData.append("id", product.id.toString());
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("imageName", product.imageName);
    if (product.imageFile) {
      formData.append("imageFile", product.imageFile);
    }

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
    <Box mt={2} >
    <form onSubmit={handleSubmit}>
      <TextField
        label="Id"
        type="number"
        name="id"
        value={product.id}
        onChange={handleInputChange}
        fullWidth
      />
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
      <TextField
        label="Image Name"
        type="text"
        name="imageName"
        value={product.imageName}
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

export default UpdateProductForm;
