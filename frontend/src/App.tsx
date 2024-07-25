// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { styled } from '@mui/system'; // Import styled from MUI
// import Header from './components/Header'
// import ProductPage from './components/products/ProductPage'
// import NotFoundPage from './components/NotFoundPage';
// import Footer from './components/Footer'
// import ProtectedRoute from './components/ProtectedRoute';
// import ProductSummaryPage from './components/dashboard/ProductSummaryPage';
// import AddProductForm from './components/products/AddProductForm';
// import UpdateProductForm from './components/products/UpdateProductForm';

// const StyledApp = styled('div')({
//   display: 'flex',
//   height: '100vh',
//   flexDirection: 'column',
//   '& > *': {
//     flexShrink: 0,
//   },
// });

 

// const App: React.FC = () => {
//   return (
//      <StyledApp>
//       <Router>
//       <Header />
//       <Routes>
//         <Route path="/dashboard" element={<ProtectedRoute />}>
//           <Route path="/dashboard" element={<ProductSummaryPage />} />
//         </Route>
//         {/* <Route path="/add" element={<ProtectedRoute />}> */}
//           <Route path="/add" element={<AddProductForm />} />
//         {/* </Route> */}
//         {/* <Route path="/update" element={<ProtectedRoute />}> */}
//           <Route path="/update/:id" element={<UpdateProductForm />} />
//         {/* </Route> */}
//         <Route path="/" element={<ProductPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//       <Footer />
//       </Router>
       
//      </StyledApp>
//   );
// };

// export default App;


//following refers to auth0 sample code

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styled } from '@mui/system'; // Import styled from MUI
import Header from './components/Header'
import ProductPage from './components/products/ProductPage'
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer'
import ProductSummaryPage from './components/dashboard/ProductSummaryPage';
import AddProductForm from './components/products/AddProductForm';
import UpdateProductForm from './components/products/UpdateProductForm';
import AuthenticationGuard from './components/authentication-guard'
const StyledApp = styled('div')({
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  '& > *': {
    flexShrink: 0,
  },
});

 

const App: React.FC = () => {
  return (
     <StyledApp>
      <Header />
      <Routes>
          <Route path="/dashboard" element={<AuthenticationGuard component={ProductSummaryPage} />} />
          <Route path="/add" element={<AuthenticationGuard component={AddProductForm} />} />
          <Route path="/update/:id" element={<AuthenticationGuard component={UpdateProductForm} />} />
          <Route path="/" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
     </StyledApp>
  );
};

export default App;

 

 

