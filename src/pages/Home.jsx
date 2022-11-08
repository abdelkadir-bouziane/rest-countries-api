import { useContext } from "react";
import CountryCard from "../components/CountryCard";
import CountriesContext from "../context/countries/CountriesContext";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";

function Home() {
  const { countries } = useContext(CountriesContext);

  return (
    <section className="homepage-container">
      <div className="header-homepage">
        <SearchBox />
        <FilterBox />
      </div>
      <div className="countries-container">
        {countries.map((country, index) => (
          <CountryCard key={index} countryInfo={country} />
        ))}
      </div>
    </section>
  );
}

export default Home;
