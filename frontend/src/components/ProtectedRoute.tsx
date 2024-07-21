// import { Outlet } from "react-router-dom";
// import { withAuthenticationRequired } from "@auth0/auth0-react";
// import Loader from "./Loader";

// const ProtectedRoute = () => <Outlet />;

// export default withAuthenticationRequired(ProtectedRoute, {
//   onRedirecting: () => <Loader />,
// });


import React from 'react';
import { Outlet } from 'react-router-dom';
import { withAuthenticationRequired, WithAuthenticationRequiredOptions } from '@auth0/auth0-react';
import Loader from './Loader';

const ProtectedRoute: React.FC = () => <Outlet />;

export default withAuthenticationRequired(ProtectedRoute, {
  onRedirecting: () => <Loader />,
} as WithAuthenticationRequiredOptions);
