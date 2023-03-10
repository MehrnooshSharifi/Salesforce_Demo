import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/Products/ProductPage";
import GeniePage from "./components/pages/Products/GeniePage";
import SalesPage from "./components/pages/Products/SalesPage";
import ContactUsPage from "./components/pages/ContactUsPage";
import SearchPage from "./components/pages/SearchPage";
function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/products/genie" element={<GeniePage />} />
        <Route path="/products/sales" element={<SalesPage />} />
        <Route path="/contactUs" element={<ContactUsPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
  );
}
export default App;
