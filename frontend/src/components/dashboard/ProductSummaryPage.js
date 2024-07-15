import { useEffect, useState } from "react";
import api from "../../api";
import AddProductButton from "./AddProductButton";
import { useNavigate } from "react-router-dom";
// import ProductList from "./ProductList";
// import Loader from "../Loader";
// import ErrorMessage from "../ErrorMessage";
// import PaginationControls from "./PaginationControls";

const ProductSummaryPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleDelete = () => {};
  const handleUpdate = (id) => {
    console.log("handleUpdate button clicked", id);
    // Example: Redirect to the update page
    navigate(`/update/${id}`);
  };

  // useEffect(() => {
  //   // We use AbortController (https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
  //   // to clean up so that we don’t introduce a memory leak
  //   // (https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)
  //   const abortController = new AbortController();

  //   const fetchData = async () => {
  //     const rawData = await api.getProducts();
  //     const result = await rawData.json();
  //     setProducts(result);
  //   };

  //   fetchData();

  //   return () => abortController.abort();
  // }, [products]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const rawData = await api.getProducts();
        const result = await rawData.json();
        setProducts(result);
      } catch (error) {
        // Handle any errors here
      }
    };

    fetchData();

    return () => abortController.abort();
  }, []);

  return (
    <>
      {/* <AddProductButton onClick={handleAddProduct} /> */}
      <AddProductButton />

      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleUpdate(product.id)}>Update</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductSummaryPage;
