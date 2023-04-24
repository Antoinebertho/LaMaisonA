import "tailwindcss/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SignupPage } from "./Pages/SignupPage";
import { LoginPage } from "./Pages/LoginPage";
import { ProductsSection } from "./components/ProductsSection";
import { ProductContext } from "./contexts/productContext";
import { productsData } from "./data/productsData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Header />
        <Routes>
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
        <ProductContext.Provider value={{ products: productsData }}>
          <ProductsSection />
        </ProductContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
