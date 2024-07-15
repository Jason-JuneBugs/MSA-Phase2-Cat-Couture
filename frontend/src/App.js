import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import ProductPage from "./components/products/ProductPage";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductSummaryPage from "./components/dashboard/ProductSummaryPage";
import AddProductForm from "./components/products/AddProductForm";
import UpdateProductForm from "./components/products/UpdateProductForm";
const StyledApp = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  & > * {
    flex-shrink: 0;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route exact path="/dashboard" element={<ProtectedRoute />}>
          <Route exact path="/dashboard" element={<ProductSummaryPage />} />
        </Route>
        <Route exact path="/add" element={<ProtectedRoute />}>
          <Route exact path="/add" element={<AddProductForm />} />
        </Route>
        <Route exact path="/update" element={<ProtectedRoute />}>
          <Route exact path="/update/:id" element={<UpdateProductForm />} />
        </Route>

        <Route exact path="/" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </StyledApp>
  );
};

export default App;
