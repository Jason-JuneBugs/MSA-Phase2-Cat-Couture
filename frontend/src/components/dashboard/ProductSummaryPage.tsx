 


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
