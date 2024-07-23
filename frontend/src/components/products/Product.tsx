// import styled from "styled-components";
// import DiscountBadge from "./DiscountBadge";

// const StyledProduct = styled.li`
//   height: 100%;
//   .card {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     background-color: gray;
//     border-radius: 15px;
//     padding: 1rem;
//     max-width: 325px;
//     height: 100%;
//   }

//   .product-image {
//     width: 100%;
//   }

//   @media screen and (min-width: 800px) {
//     display: grid;
//     justify-content: center;
//     .card {
//       max-width: 390px;
//     }
//   }
//   @media screen and (min-width: 1280px) {
//     .card {
//       max-width: 400px;
//     }
//   }
// `;

// const StyledDiscountBadge = styled(DiscountBadge)`
//   font-size: 1.5rem;
//   color: orange;
// `;

// const StyledButton = styled.button`
//   background-color: black;
//   color: white;
//   border-radius: 15px;
// `;

// const Product = ({
//   name,
//   description,
//   price,
//   imageName,
//   // imageDescription,
//   // discountType,
//   // discountValue,
// }) => {
//   return (
//     <StyledProduct>
//       <div className="card">
//         <div>
//           {imageName ? (
//             <img
//               // src={`./img/${imageName}`}
//               src={`${process.env.PUBLIC_URL}/img/${imageName}`}
//               alt={imageName}
//               className="product-image"
//             />
//           ) : (
//             <img
//               src="./img/cat-photo-default.jpg"
//               alt="Default product cat"
//               className="product-image"
//             />
//           )}
//           {/* {discountValue && discountType && (
//             <StyledDiscountBadge
//               discountValue={discountValue}
//               discountType={discountType}
//             />
//           )} */}
//         </div>
//         <h3>{name}</h3>
//         <p>Price: {`${price} NZD`}</p>
//         {/* {discountValue && discountType && (
//           <StyledDiscountBadge
//             discountValue={discountValue}
//             discountType={discountType}
//           />
//         )} */}
//         <p data-testid="product-description">{description}</p>
//         <StyledButton>Add to Cart</StyledButton>
//       </div>
//     </StyledProduct>
//   );
// };

// export default Product;

import React from "react";
import { styled } from "@mui/system"; // Import styled from MUI system
import Button from "@mui/material/Button";

const StyledProduct = styled("li")({
  flexGrow: 1,
  marginBottom: "20px",
});

const StyledCard = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: "gray",
  borderRadius: "15px",
  padding: "1rem",
  maxWidth: "325px",
  height: "100%",
});

const StyledProductImage = styled("img")({
  width: "100%",
});

interface ProductProps {
  name: string;
  description: string;
  price: number;
  imageName?: string;
  // Add other props as needed
}

const Product: React.FC<ProductProps> = ({
  name,
  description,
  price,
  imageName,
}) => {
  return (
    <StyledProduct>
      <StyledCard>
        <div>
          {imageName ? (
            <StyledProductImage
              src={`${process.env.PUBLIC_URL}/img/${imageName}`}
              // src={`../../../../backend/Uploads/${imageName}`}
              alt={imageName}
            />
          ) : (
            <StyledProductImage
              src="./img/cat-photo-default.jpg"
              alt="Default product cat"
            />
          )}
          {/* Add DiscountBadge component here if needed */}
        </div>
        <h3>{name}</h3>
        <p>Price: {`${price} NZD`}</p>
        {/* Add DiscountBadge component here if needed */}
        <p data-testid="product-description">{description}</p>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </StyledCard>
    </StyledProduct>
  );
};

export default Product;
