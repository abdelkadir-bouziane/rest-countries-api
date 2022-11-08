const COUNTRIES_API_URL = process.env.REACT_APP_COUNTRIES_API_URL;

// Get search result
export const searchCountries = async (text) => {
  if (text === "") {
    return await fetch(`${COUNTRIES_API_URL}/all`)
      .then((res) => res.json())
      .then((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          capital: country.capital,
          region: country.region,
          population: country.population,
          flag: country.flags.svg,
        }))
      );
  } else {
    return await fetch(`${COUNTRIES_API_URL}/name/${text}`)
      .then((res) => res.json())
      .then((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          capital: country.capital,
          region: country.region,
          population: country.population,
          flag: country.flags.svg,
        }))
      );
  }
};
