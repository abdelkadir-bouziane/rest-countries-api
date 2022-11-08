import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import NouFound from "./pages/NotFound";
import { CountriesProvider } from "./context/countries/CountriesContext";

function App() {
  return (
    <CountriesProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/country/:country" element={<Country />} />
            <Route path="*" element={<NouFound />} />
          </Routes>
        </main>
      </Router>
    </CountriesProvider>
  );
}

export default App;
