import { useContext } from "react";
import { ClipLoader as Loader } from "react-spinners";
import CountryCard from "../components/CountryCard";
import CountriesContext from "../context/countries/CountriesContext";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import ThemeContext from "../context/theme/ThemeContext";
import { themes } from "../context/theme/themes";

function Home() {
  const { countries, filterValue, loading } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  const regionsArray = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <section className="homepage-container">
      <div className="header-homepage">
        <SearchBox />
        <FilterBox options={regionsArray} />
      </div>

      {loading ? (
        <div className="home-spinner">
          <Loader size={70} color={themes[theme].text} />
        </div>
      ) : (
        <div className="countries-container">
          {countries.map(
            (country, index) =>
              country.commonName !== "Israel" &&
              (filterValue === "" || filterValue === country.region) && (
                <CountryCard key={index} countryInfo={country} />
              )
          )}
        </div>
      )}
    </section>
  );
}

export default Home;
