// import { useAuth0 } from "@auth0/auth0-react";
// // import Loader from "./Loader";

// const LoginButton = () => {
//   const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
//   console.log(useAuth0());
//   if (isLoading) {
//     return (
//       <button>
//         {/* <Loader /> */}
//         loading
//       </button>
//     );
//   }

//   if (isAuthenticated) {
//     return (
//       <button onClick={() => logout({ returnTo: window.location.origin })}>
//         Log Out
//       </button>
//     );
//   }

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import React from 'react';
import { useAuth0, LogoutOptions } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button>
        {/* <Loader /> */}
        loading
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <button onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>
        Log Out
      </button>
    );
  }

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;


