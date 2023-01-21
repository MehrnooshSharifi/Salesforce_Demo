import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/Products/ProductPage";
import GeniePage from "./components/pages/Products/GeniePage";
import SalesPage from "./components/pages/Products/SalesPage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products/genie" element={<GeniePage />} />
        <Route path="/products/sales" element={<SalesPage />} />
      </Routes>
    </Layout>
  );
}
export default App;
