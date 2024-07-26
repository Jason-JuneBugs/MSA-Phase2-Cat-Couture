// import { useEffect, useState } from "react";
// import api from "../../api";
// import AddProductButton from "./AddProductButton";
// import { useNavigate } from "react-router-dom";

// const ProductSummaryPage = () => {
//   const [products, setProducts] = useState([]);
//   const [initialFetchDone, setInitialFetchDone] = useState(false);
//   const navigate = useNavigate();

//   const handleDelete = async (productId) => {
//     try {
//       await api.deleteProductById(productId);
//       // Remove the deleted product from the state
//       setProducts((prevProducts) =>
//         prevProducts.filter((product) => product.id !== productId)
//       );
//     } catch (error) {
//       // Handle any errors here
//       console.error("Failed to delete product:", error);
//     }
//   };

//   const handleUpdate = (id) => {
//     // console.log("handleUpdate button clicked", id);
//     // Example: Redirect to the update page
//     navigate(`/update/${id}`);
//   };

//   useEffect(() => {
//     //  use AbortController (https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
//     //   to clean up so that we don’t introduce a memory leak
//     //   (https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)
//     const abortController = new AbortController();

//     const fetchData = async () => {
//       try {
//         const response = await api.getProducts();
//         const result = await response.json();
//         const sortedResult = [...result].sort((a, b) => a.id - b.id);
//         setProducts(sortedResult);
//         setInitialFetchDone(true);
//       } catch (error) {
//         // Handle any errors here
//       }
//     };

//     if (!initialFetchDone) {
//       fetchData(); // Initial fetch
//     }

//     return () => abortController.abort();
//   }, [initialFetchDone]);
//   return (
//     <>
//       <AddProductButton />

//       <table>
//         <thead>
//           <tr>
//             <th>Product Id</th>
//             <th>Product Name</th>
//             <th>Product Description</th>
//             <th>Price</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => handleUpdate(product.id)}>Update</button>
//                 <button onClick={() => handleDelete(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default ProductSummaryPage;

///Original code using JS <table>
// import React, { useEffect, useState } from "react";
// import api from "../../api";
// import AddProductButton from "./AddProductButton";
// import { useNavigate } from "react-router-dom";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
// }

// const ProductSummaryPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [initialFetchDone, setInitialFetchDone] = useState(false);
//   const navigate = useNavigate();

//   const handleDelete = async (productId: number) => {
//     try {
//       await api.deleteProductById(productId);
//       // Remove the deleted product from the state
//       setProducts((prevProducts) =>
//         prevProducts.filter((product) => product.id !== productId)
//       );
//     } catch (error) {
//       // Handle any errors here
//       console.error("Failed to delete product:", error);
//     }
//   };

//   const handleUpdate = (id: number) => {
//     // Example: Redirect to the update page
//     navigate(`/update/${id}`);
//   };

//   useEffect(() => {
//     // Use AbortController to clean up and avoid memory leaks
//     const abortController = new AbortController();

//     const fetchData = async () => {
//       try {
//         const response = await api.getProducts();
//         const result: Product[] = await response?.json();
//         const sortedResult = [...result].sort((a, b) => a.id - b.id);
//         setProducts(sortedResult);
//         setInitialFetchDone(true);
//       } catch (error) {
//         // Handle any errors here
//       }
//     };

//     if (!initialFetchDone) {
//       fetchData(); // Initial fetch
//     }

//     return () => abortController.abort();
//   }, [initialFetchDone]);

//   return (
//     <>
//       <AddProductButton />

//       <table>
//         <thead>
//           <tr>
//             <th>Product Id</th>
//             <th>Product Name</th>
//             <th>Product Description</th>
//             <th>Price</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => handleUpdate(product.id)}>Update</button>
//                 <button onClick={() => handleDelete(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default ProductSummaryPage;


import React, { useEffect, useState } from "react";
import {Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import api from "../api/api";
import AddProductButton from "./AddProductButton";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "1rem 0",

  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
};
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductSummaryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (productId: number) => {
    try {
      await api.deleteProductById(productId);
      // Remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      // Handle any errors here
      console.error("Failed to delete product:", error);
    }
  };

  const handleUpdate = (id: number) => {
    // Example: Redirect to the update page
    navigate(`/update/${id}`);
  };

  useEffect(() => {
    // Use AbortController to clean up and avoid memory leaks
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await api.getProducts();
        const result: Product[] = await response?.json();
        const sortedResult = [...result].sort((a, b) => a.id - b.id);
        setProducts(sortedResult);
        setInitialFetchDone(true);
      } catch (error) {
        // Handle any errors here
      }
    };

    if (!initialFetchDone) {
      fetchData(); // Initial fetch
    }

    return () => abortController.abort();
  }, [initialFetchDone]);

  return (
    <>
       <Typography variant="h5" style={styles.title}>
          Product Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
           <TableRow>
              <TableCell><strong>Product Id</strong></TableCell>
              <TableCell><strong>Product Name</strong></TableCell>
              <TableCell><strong>Product Description</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdate(product.id)}>Update</Button>
                  <Button onClick={() => handleDelete(product.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
      <div style={styles.container}>
             <AddProductButton />
      </div>
    </>
  );
};

export default ProductSummaryPage;
