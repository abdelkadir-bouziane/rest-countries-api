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
        )
        .then((countries) =>
          countries.filter((country) => country.commonName !== "Israel")
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
        )
        .then((countries) =>
          countries.filter((country) => country.commonName !== "Israel")
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
      const borderCountries = await filterBorderCountrie(
        infos.commonName,
        infos.borderCountries
      );
      const borders = await Promise.all(
        borderCountries.map((code) => countryName(code))
      );
      return { ...infos, borderCountries: borders };
    }
  } catch {
    return null;
  }
};

const filterBorderCountrie = async (countrie, bourderCountries) => {
  if (countrie === "Palestine") {
    const borders1 = bourderCountries.filter(
      (countrieCode) => countrieCode !== "ISR"
    );
    const borders2 = await fetch(
      `${COUNTRIES_API_URL}/name/Israel?fullText=true`
    )
      .then((res) => res.json())
      .then((arr) => arr[0])
      .then((country) => country.borders)
      .then((bourderCountries) =>
        bourderCountries.filter((countrieCode) => countrieCode !== "PSE")
      );
    return [...new Set([...borders1, ...borders2])];
  } else {
    const borders = bourderCountries.map((countrieCode) =>
      countrieCode === "ISR" ? "PSE" : countrieCode
    );
    return [...new Set(borders)];
  }
};

// Get string number with commas
export const numberWithCommas = (x) => {
  return (+x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
