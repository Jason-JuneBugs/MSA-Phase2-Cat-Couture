// Product.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "../components/products/Product";

describe("Product", () => {
  const mockProduct = {
    name: "Sample Product",
    description: "A great product for testing",
    price: 19.99,
    imageName: "sample-image.jpg",
  };

  it("renders product details correctly", () => {
    render(<Product {...mockProduct} />);

    const productName = screen.getByText(mockProduct.name);
    const productDescription = screen.getByTestId("product-description");

    expect(productName).toBeInTheDocument();
    expect(productDescription).toHaveTextContent(mockProduct.description);
  });

  it("displays default image when no imageName is provided", () => {
    render(<Product {...mockProduct} imageName={undefined} />);

    const defaultImage = screen.getByAltText("Default product cat");
    expect(defaultImage).toBeInTheDocument();
  });
});
