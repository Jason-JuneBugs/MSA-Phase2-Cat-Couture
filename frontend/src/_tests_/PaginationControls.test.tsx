// PaginationControls.test.tsx

import React from "react";
import { render,screen, fireEvent } from "@testing-library/react";
import PaginationControls from "../components/products/PaginationControls"

describe("PaginationControls", () => {
  it("disables the previous button when on the first page", () => {
    const mockOnPrev = jest.fn();
    const mockOnNext = jest.fn();
    const { getByRole } = render(
      <PaginationControls onPrev={mockOnPrev} onNext={mockOnNext} currentPage={1} totalPages={5} />
    );

    const prevButton = screen.getByRole("button", { name: /previous page/i });
    expect(prevButton).toBeDisabled();
  });

  it("disables the next button when on the last page", () => {
    const mockOnNext = jest.fn();
    const mockOnPrev = jest.fn();

    const { getByRole } = render(
      <PaginationControls onNext={mockOnNext} onPrev={mockOnPrev} currentPage={5} totalPages={5} />
    );

    const nextButton = screen.getByRole("button", { name: /next page/i });
    expect(nextButton).toBeDisabled();
  });

  it("calls onPrev when the previous button is clicked", () => {
    const mockOnPrev = jest.fn();
    const mockOnNext=jest.fn();
    const { getByRole } = render(
      <PaginationControls onPrev={mockOnPrev} onNext={mockOnNext} currentPage={3} totalPages={5} />
    );

    const prevButton = screen.getByRole("button", { name: /previous page/i });
    fireEvent.click(prevButton);

    expect(mockOnPrev).toHaveBeenCalled();
  });

  it("calls onNext when the next button is clicked", () => {
    const mockOnNext = jest.fn();
    const mockOnPrev = jest.fn();
    const { getByRole } = render(
      <PaginationControls onNext={mockOnNext} onPrev={mockOnPrev} currentPage={3} totalPages={5} />
    );

    const nextButton = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(nextButton);

    expect(mockOnNext).toHaveBeenCalled();
  });
});
