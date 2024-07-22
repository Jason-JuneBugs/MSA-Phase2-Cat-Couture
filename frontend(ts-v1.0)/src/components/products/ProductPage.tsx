// import { useEffect, useState } from "react";
// import api from "../../api";
// import ProductList from "./ProductList";
// import Loader from "../Loader";
// import ErrorMessage from "../ErrorMessage";
// import PaginationControls from "./PaginationControls";

// const ProductPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [limit, setLimit] = useState(8);

//   //add paginagtion argues

//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState();

//   const onPrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const onNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };
//   useEffect(() => {
//     // We use AbortController (https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
//     // to clean up so that we don’t introduce a memory leak
//     // (https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)
//     const abortController = new AbortController();

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const rawData = await api.getProducts();
//         const result = await rawData.json();
//         setProducts(result);
//         setTotalPages(Math.ceil(parseInt(result.length) / limit));
//         console.log(result, result.length);

//         if (!result.ok) {
//           throw new Error("API Error");
//         }
//         if (!abortController.signal.aborted) {
//           setProducts(result);
//           setTotalPages(result.length / limit);
//         }
//       } catch (error) {
//         if (!abortController.signal.aborted) {
//           setError(true);
//         }
//       } finally {
//         if (!abortController.signal.aborted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();

//     return () => abortController.abort();
//   }, []);

//   return (
//     <main className="main-layout section-padding">
//       {loading && <Loader />}
//       {error && <ErrorMessage message="Error fetching products" />}
//       {/* <ProductList products={products} className="main-content" /> */}
//       <ProductList
//         products={products}
//         limit={limit}
//         page={currentPage}
//         className="main-content"
//       />
//       <PaginationControls
//         onPrev={onPrev}
//         onNext={onNext}
//         currentPage={currentPage}
//         totalPages={totalPages}
//       />
//     </main>
//   );
// };

// export default ProductPage;

import React, { useEffect, useState } from "react";
import api from "../../api";
import ProductList from "./ProductList";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import PaginationControls from "./PaginationControls";

 

const ProductPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const limit = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | undefined>();

  const onPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const onNext = () => {
    if (currentPage < totalPages!) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const rawData = await api.getProducts();

        if (rawData) {
          const result = await rawData.json();
          setProducts(result);
          setTotalPages(Math.ceil(result.length / limit));

          if (!result.ok) {
            throw new Error("API Error");
          }
          if (!abortController.signal.aborted) {
            setProducts(result);
            setTotalPages(result.length / limit);
          }
        } else {
          // Handle null response (optional)
          setError(true);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, []);

  return (
    <main className="main-layout section-padding">
      {loading && <Loader />}
      {error && <ErrorMessage message="Error fetching products" />}
      <ProductList
        products={products}
        limit={limit}
        page={currentPage}
        // className="main-content"
      />
      <PaginationControls
        onPrev={onPrev}
        onNext={onNext}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default ProductPage;