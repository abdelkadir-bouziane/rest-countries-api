import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import NouFound from "./pages/NotFound";
import { CountriesProvider } from "./context/countries/CountriesContext";
import { useContext } from "react";
import ThemeContext from "./context/theme/ThemeContext";
import GlobalStyles from "./GlobalStyle";
import { themes } from "./context/theme/themes";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <CountriesProvider>
      <ThemeProvider theme={{ ...themes[theme] }}>
        <GlobalStyles />
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/rest-countries-api" element={<Home />} />
              <Route path="/rest-countries-api/about" element={<About />} />
              <Route
                path="/rest-countries-api/country/:country"
                element={<Country />}
              />
              <Route path="*" element={<NouFound />} />
            </Routes>
          </main>
        </Router>
      </ThemeProvider>
    </CountriesProvider>
  );
}

export default App;
