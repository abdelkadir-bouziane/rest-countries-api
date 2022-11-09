import { useContext } from "react";
import CountryCard from "../components/CountryCard";
import CountriesContext from "../context/countries/CountriesContext";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";

function Home() {
  const { countries, filterValue } = useContext(CountriesContext);

  return (
    <section className="homepage-container">
      <div className="header-homepage">
        <SearchBox />
        <FilterBox
          options={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
        />
      </div>
      <div className="countries-container">
        {countries.map(
          (country, index) =>
            country.commonName !== "Israel" &&
            (filterValue === "" || filterValue === country.region) && (
              <CountryCard key={index} countryInfo={country} />
            )
        )}
      </div>
    </section>
  );
}

export default Home;
