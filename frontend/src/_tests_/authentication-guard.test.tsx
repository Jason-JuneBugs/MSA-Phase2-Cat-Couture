// AuthenticationGuard.test.js (or AuthenticationGuard.test.tsx if using TypeScript)
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { withAuthenticationRequired } from '@auth0/auth0-react'; // Mock the withAuthenticationRequired function
// import AuthenticationGuard from '../components/Utils/authentication-guard'
// // Mock the component that you're protecting
// const MockComponent: React.FC = () => <div>Mock Component</div>;

// describe('AuthenticationGuard', () => {
//   it('renders the protected component', () => {
//     // Mock the withAuthenticationRequired function
//     jest.spyOn(withAuthenticationRequired, 'withAuthenticationRequired')
//       .mockImplementation((component: React.FC) => component);

//     const { getByText } = render(<AuthenticationGuard component={MockComponent} />);

//     expect(screen.getByText('Mock Component')).toBeInTheDocument();
//   });

//   it('renders the loader during redirection', () => {
//     // Mock the withAuthenticationRequired function to return a loader
//     jest.spyOn(withAuthenticationRequired, 'withAuthenticationRequired')
//       .mockImplementation((component: React.FC, options: any) => {
//         return options.onRedirecting();
//       });

//     const { getByTestId } = render(<AuthenticationGuard component={MockComponent} />);

//     expect(getByTestId('loader')).toBeInTheDocument();
//   });
// });