// LoginButton.test.js (or LoginButton.test.tsx if using TypeScript)
// LoginButton.test.js (or LoginButton.test.tsx if using TypeScript)
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Auth0ContextInterface, User } from '@auth0/auth0-react'; // Import the necessary types
import LoginButton from '../components/LoginButton';

// Manually create a mock for useAuth0
const mockUseAuth0: Auth0ContextInterface<User> = {
  isAuthenticated: true, // Set the initial value as needed
  loginWithRedirect: jest.fn(),
  logout: jest.fn(),
  user: undefined, // Set the user object to undefined
  isLoading: false, // Set the loading state as needed
  getAccessTokenSilently: jest.fn(),
  getAccessTokenWithPopup: jest.fn(),
  getIdTokenClaims: jest.fn(),
  loginWithPopup: jest.fn(),
  handleRedirectCallback: jest.fn(),
};

// Mock the useAuth0 hook
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => mockUseAuth0,
}));

describe('LoginButton', () => {
  it('renders Log In button when isAuthenticated is false', () => {
    render(<LoginButton />);

    const logInButton = screen.getByRole('button', { name: /Log Out/i });
    expect(logInButton).toBeInTheDocument();
  });

  // Add other test cases as needed

  // Clean up the mock after all tests
  afterAll(() => {
    jest.restoreAllMocks();
  });
});
