import { useEffect, useState } from "react";
import api from "../../api";
import AddProductButton from "./AddProductButton";
// import ProductList from "./ProductList";
// import Loader from "../Loader";
// import ErrorMessage from "../ErrorMessage";
// import PaginationControls from "./PaginationControls";

const ProductSummaryPage = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = () => {};
  const handleUpdate = () => {};

  // const handleAddProduct = () => <Link to="/add">Add a new product</Link>;
  // const handleAddProduct = () => {
  //   console.log("the add product button has been hit");
  // };
  // <Link to="/add">Add product</Link>;

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
      <AddProductButton />
      {/* <table>
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
      </table> */}
    </>
  );
};

export default ProductSummaryPage;
