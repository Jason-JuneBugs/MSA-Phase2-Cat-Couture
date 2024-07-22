// import Product from "./Product";
// import styled from "styled-components";

// const StyledProductList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: fit-content;
//   height: fit-content;
//   height: auto;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   gap: 3px;

//   @media screen and (min-width: 800px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     justify-content: center;
//   }
//   @media screen and (min-width: 1280px) {
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//   }
// `;

// const ProductList = ({ products, limit, page }) => {
//   // Calculate the starting index for the current page
//   const startIndex = (page - 1) * limit;

//   // Sort products by id (ascending)
//   const sortedProducts = [...products].sort((a, b) => a.id - b.id);

//   // Slice the sorted products array to get the products for the current page
//   const paginatedProducts = sortedProducts.slice(
//     startIndex,
//     startIndex + limit
//   );

//   return (
//     <StyledProductList>
//       {paginatedProducts.map((product) => (
//         <Product
//           key={product.id}
//           name={product.name}
//           description={product.description}
//           price={product.price}
//           imageName={product.imageName}
//         />
//       ))}
//     </StyledProductList>
//   );
// };

// export default ProductList;

import React from 'react';
import { styled } from '@mui/system';
import Product from './Product'; // Make sure to import the Product component

interface iProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageName: string;
}

interface ProductListProps {
  products: iProduct[];
  limit: number;
  page: number;
}

const StyledProductList = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  height: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 3px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ProductList: React.FC<ProductListProps> = ({ products, limit, page }) => {
  const startIndex = (page - 1) * limit;
  const sortedProducts = [...products].sort((a, b) => a.id - b.id);
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + limit);

  return (
    <StyledProductList>
      {paginatedProducts.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageName={product.imageName}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;