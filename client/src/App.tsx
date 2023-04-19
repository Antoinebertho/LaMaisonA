import "tailwindcss/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SignupPage } from "./Pages/SignupPage";
import { LoginPage } from "./Pages/LoginPage";
import { ShoppingSection } from "./components/ShoppingSection";

function App() {
  return (
    <div>
        <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
      <Header />
      <ShoppingSection />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
