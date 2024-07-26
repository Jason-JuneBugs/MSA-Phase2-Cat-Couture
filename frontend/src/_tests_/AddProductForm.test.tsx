// AddProductButton.test.tsx
// AddProductForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddProductForm from '../components/products/AddProductForm';

describe('AddProductForm', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<AddProductForm />);

    // Example: Check if the "Name" label is rendered
    expect(screen.getByLabelText('Name')).toBeInTheDocument();

    // Example: Simulate input change for the "Name" field
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Product Name' } });

    // Example: Simulate form submission (button click)
    fireEvent.click(screen.getByText('Submit'));

    // Example: Check if the input value is updated
    expect(screen.getByLabelText('Name')).toHaveValue('Product Name');

  });
});
