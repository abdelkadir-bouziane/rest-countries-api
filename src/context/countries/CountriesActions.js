const COUNTRIES_API_URL = process.env.REACT_APP_COUNTRIES_API_URL;

// Get search result
export const searchCountries = async (text) => {
  try {
    if (text === "") {
      return await fetch(`${COUNTRIES_API_URL}/all`)
        .then((res) => res.json())
        .then((countries) =>
          countries.map((country) => ({
            commonName: country.name.common,
            officialName: country.name.official,
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
            commonName: country.name.common,
            officialName: country.name.official,
            capital: country.capital,
            region: country.region,
            population: country.population,
            flag: country.flags.svg,
          }))
        );
    }
  } catch {
    return [];
  }
};

// Get country name from Code
const countryName = (code) => {
  return fetch(`${COUNTRIES_API_URL}/alpha/${code}`)
    .then((res) => res.json())
    .then((arr) => arr[0])
    .then((country) => country.name.common);
};

// Get informations about a country

export const getCountryInfos = async (text) => {
  try {
    const infos = await fetch(`${COUNTRIES_API_URL}/name/${text}?fullText=true`)
      .then((res) => res.json())
      .then((arr) => arr[0])
      .then((country) => ({
        commonName: country.name.common,
        officialName: country.name.official,
        population: country.population,
        region: country.region,
        subRegion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.tld,
        currencies: country.currencies,
        languages: country.languages,
        borderCountries: country.borders,
        flag: country.flags.svg,
      }));

    if (infos.borderCountries === undefined) {
      return infos;
    } else {
      const borders = await Promise.all(
        infos.borderCountries.map((code) => countryName(code))
      );
      return { ...infos, borderCountries: borders };
    }
  } catch {
    return null;
  }
};
