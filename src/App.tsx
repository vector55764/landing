import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/pages/HomePage";
import { ProductsPage } from "./components/pages/ProductsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/landing/" element={<HomePage />}></Route>
        <Route path="/landing/products" element={<ProductsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
