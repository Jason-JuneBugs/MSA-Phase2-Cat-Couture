 

import React from 'react';
import { useAuth0, LogoutOptions } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <button>
        loading
      </button>
    );
  }

  if (isAuthenticated) {
    return (
       <Button
           variant="contained"
           sx={{ color: 'white', backgroundColor: 'green', borderColor: 'green' }}
           style={{ maxWidth: '100px', minWidth: '100px' }}
           onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>
              Log Out
       </Button>
  
    );
  }

  return <Button 
           variant="contained"
           sx={{ color: 'white', backgroundColor: 'Grey', borderColor: 'green' }}
           style={{ maxWidth: '100px', minWidth: '100px' }}
           onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;


