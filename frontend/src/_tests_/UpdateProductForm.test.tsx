// UpdateProductForm.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TextField, Button, Box } from "@mui/material"; // Import MUI components

import UpdateProductForm from "../components/products/UpdateProductForm"

describe("UpdateProductForm", () => {
  const mockSubmit = jest.fn(); // Mock the submit function

  it("renders form fields correctly", () => {
    render(<UpdateProductForm  />);

    const nameField = screen.getByLabelText("Name");
    const descriptionField = screen.getByLabelText("Description");
    const priceField = screen.getByLabelText("Price");
    const imageNameField = screen.getByLabelText("Image Name");

    expect(nameField).toBeInTheDocument();
    expect(descriptionField).toBeInTheDocument();
    expect(priceField).toBeInTheDocument();
    expect(imageNameField).toBeInTheDocument();
  });

  it("updates product state when input values change", () => {
   render(<UpdateProductForm   />);
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "New Product Name" } });

    expect(nameInput).toHaveValue("New Product Name");
  });
 

  })