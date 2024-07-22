import React, { useEffect, useState } from "react";
import api from "../../api"
import ProductList from "./ProductList";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage"
import PaginationControls from "./PaginationControls";

const ProductPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);
  const limit = 8;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const onPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    // console.log("onPrev hit!", currentPage)
  };

  const onNext = () => {
    if (currentPage < totalPages!) setCurrentPage(currentPage + 1);
    // console.log("onNext hit",currentPage)
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
          console.log("result is :",result)
          setProducts(result);
          setTotalPages(Math.ceil(result.length / limit));
        //   console.log("total page is ", totalPages,"current page is", currentPage)

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
  }, [totalPages,currentPage]);

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
 