import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage"
import IndustriesPage from "./pages/IndustriesPage"
import LearningPage from "./pages/LearningPage"
import ProductsPage from "./pages/ProductsPage"
import SalesforcePage from "./pages/SalesforcePage"
import SupportPage from "./pages/SupportPage"

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/CompanyPage" element={<CompanyPage/>} />
        <Route path="/IndustriesPage" element={<IndustriesPage/>} />
        <Route path="/LearningPage" element={<LearningPage/>} />
        <Route path="/ProductsPage" element={<ProductsPage/>} />
        <Route path="/SalesforcePage" element={<SalesforcePage/>} />
        <Route path="/SupportPage" element={<SupportPage/>} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
