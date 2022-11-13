import { useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ClipLoader as Loader } from "react-spinners";
import CountriesContext from "../context/countries/CountriesContext";
import BackBtn from "../components/BackBtn";
import {
  getCountryInfos,
  numberWithCommas,
} from "../context/countries/CountriesActions";
import ThemeContext from "../context/theme/ThemeContext";
import { themes } from "../context/theme/themes";

function Country() {
  const { country, loading, dispatch } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getInfos = async () => {
      const result = await getCountryInfos(params.country);
      if (!result) {
        navigate("/not-found");
      }
      dispatch({
        type: "GET_COUNTRY_INFOS",
        payload: result,
      });
    };

    getInfos();
  }, [params.country, dispatch, navigate]);

  const currenciesString = (currObj) => {
    let tab = [];
    for (const prop in currObj) {
      tab = [...tab, currObj[prop].name];
    }
    return tab.join(", ");
  };

  const languagesString = (langObj) => {
    let tab = [];
    for (const prop in langObj) {
      tab = [...tab, langObj[prop]];
    }
    return tab.join(", ");
  };

  return (
    <>
      {loading || !country ? (
        <div className="country-spinner">
          <Loader size={70} color={themes[theme].text} />
        </div>
      ) : (
        <div className="countrypage-container">
          <BackBtn />
          <div className="country-infos">
            <div
              className="img"
              style={{
                backgroundImage: `url(${country.flag})`,
              }}
            ></div>
            <div className="texts">
              <h2>{country.commonName}</h2>
              <div className="info-items">
                <ul>
                  {country.officialName !== undefined ? (
                    <li>
                      <strong>Official Name: </strong>
                      {country.officialName}
                    </li>
                  ) : null}
                  {country.population !== undefined ? (
                    <li>
                      <strong>Population: </strong>
                      {numberWithCommas(country.population)}
                    </li>
                  ) : null}
                  {country.region !== undefined ? (
                    <li>
                      <strong>Region: </strong>
                      {country.region}
                    </li>
                  ) : null}
                  {country.subRegion !== undefined ? (
                    <li>
                      <strong>Sub Region: </strong>
                      {country.subRegion}
                    </li>
                  ) : null}
                  {country.capital !== undefined ? (
                    <li>
                      <strong>Capital: </strong>
                      {country.capital}
                    </li>
                  ) : null}
                </ul>

                <ul>
                  {country.topLevelDomain !== undefined ? (
                    <li>
                      <strong>Top Level Domain: </strong>
                      {country.topLevelDomain}
                    </li>
                  ) : null}
                  {country.currencies !== undefined ? (
                    <li>
                      <strong>Currencies: </strong>
                      {currenciesString(country.currencies)}
                    </li>
                  ) : null}
                  {country.languages !== undefined ? (
                    <li>
                      <strong>Languages: </strong>
                      {languagesString(country.languages)}
                    </li>
                  ) : null}
                </ul>
              </div>
              {country.borderCountries !== undefined ? (
                <p>
                  <strong> Border Countries: </strong>
                  {country.borderCountries.map((country, index) => (
                    <Link
                      key={index}
                      to={`/country/${country}`}
                      className="country-border-link"
                    >
                      {`${country} `}
                    </Link>
                  ))}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Country;
