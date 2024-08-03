// Footer.test.tsx
import { render, screen } from '@testing-library/react'; // Import `screen` from testing-library/react
import Footer from '../components/Footer';

test('renders footer with correct links', () => {
  render(<Footer />); // Use `render` without destructuring

  // Check if the copyright text is rendered
  const copyrightText = screen.getByText(/Copyright Placeholder/i);
  expect(copyrightText).toBeInTheDocument();

  // Check if the "Terms of use" link is rendered
  const termsOfUseLink = screen.getByText(/Terms of use/i);
  expect(termsOfUseLink).toBeInTheDocument();
  expect(termsOfUseLink).toHaveAttribute('href', '/');

  // Check if the "Privacy policy" link is rendered
  const privacyPolicyLink = screen.getByText(/Privacy policy/i);
  expect(privacyPolicyLink).toBeInTheDocument();
  expect(privacyPolicyLink).toHaveAttribute('href', '/');
});

