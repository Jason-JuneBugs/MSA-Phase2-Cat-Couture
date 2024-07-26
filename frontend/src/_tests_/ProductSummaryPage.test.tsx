// ProductSummaryPage.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductSummaryPage from "../components/dashboard/ProductSummaryPage";
import api from "../components/api/api";

// Mock your API functions (e.g., api.getProducts, api.deleteProductById) using jest.fn()

describe("ProductSummaryPage", () => {
  it("renders product data correctly", async () => {
    // Mock your API response with sample product data
    const mockProducts = [
      { id: 1, name: "Product A", description: "Description A", price: 10 },
      // Add more mock products as needed
    ];

    // Mock api.getProducts to return the mockProducts
    api.getProducts = jest.fn().mockResolvedValue({ json: () => mockProducts });

    render(
      <BrowserRouter>
        <ProductSummaryPage />
      </BrowserRouter>
    );

    // Wait for the initial data to load
    await screen.findByText("Product A");

    // Assert that the product data is displayed correctly
    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Description A")).toBeInTheDocument();

    // Find the product price element based on its role (assuming it's in a table cell)
    const productPriceElement = screen.getByRole("cell", { name: /10/i });

    expect(productPriceElement).toBeInTheDocument();
  });

  
});
