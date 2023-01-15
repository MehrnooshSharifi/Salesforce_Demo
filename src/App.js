import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Layout>
  );
}
export default App;
