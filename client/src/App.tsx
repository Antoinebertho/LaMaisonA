import "tailwindcss/tailwind.css";
import { Footer } from "./Components/Footer";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
