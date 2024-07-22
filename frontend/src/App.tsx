// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styled } from '@mui/system'; // Import styled from MUI
import Header from './components/Header'
import ProductPage from './components/products/ProductPage'
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute';
import ProductSummaryPage from './components/dashboard/ProductSummaryPage';
import AddProductForm from './components/products/AddProductForm';
import UpdateProductForm from './components/products/UpdateProductForm';

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
      <Router>
      <Header />
      <Routes>
        {/* <Route path="/dashboard" element={<ProtectedRoute />}> */}
          <Route path="/dashboard" element={<ProductSummaryPage />} />
        {/* </Route> */}
        {/* <Route path="/add" element={<ProtectedRoute />}> */}
          <Route path="/add" element={<AddProductForm />} />
        {/* </Route> */}
        {/* <Route path="/update" element={<ProtectedRoute />}> */}
          <Route path="/update/:id" element={<UpdateProductForm />} />
        {/* </Route> */}
        <Route path="/" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      </Router>
       
     </StyledApp>
  );
};

export default App;

 

