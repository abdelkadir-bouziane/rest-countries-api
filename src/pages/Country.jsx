import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ClipLoader as Loader } from "react-spinners";
import { getCountryInfos } from "../context/countries/CountriesActions";
import CountriesContext from "../context/countries/CountriesContext";

function Country() {
  const { country, loading, dispatch } = useContext(CountriesContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getInfos = async () => {
      const result = await getCountryInfos(params.country);
      dispatch({
        type: "GET_COUNTRY_INFOS",
        payload: result,
      });
    };

    getInfos();
  }, [params.country]);

  return (
    <section>
      {loading ? (
        <div className="country-spinner">
          <Loader color="rgb(17, 21, 23)" size={70} />
        </div>
      ) : (
        <>
          <h1>{country.commonName}</h1>
          <h1>{country.officialName}</h1>
          <h1>{country.population}</h1>
          <h1>{country.region}</h1>
          <h1>{country.subRegion}</h1>
          <h1>{country.capital}</h1>
          <h1>{country.topLevelDomain}</h1>
          <h1>{JSON.stringify(country.currencies)}</h1>
          <h1>{JSON.stringify(country.languages)}</h1>
          <h1>
            {country.borderCountries !== undefined
              ? country.borderCountries.map((country, index) => (
                  <Link
                    key={index}
                    to={`/country/${country}`}
                    style={{ marginRight: "2rem" }}
                  >
                    {country}
                  </Link>
                ))
              : null}
          </h1>
          <img src={country.flag} alt="flag" />
        </>
      )}
    </section>
  );
}

export default Country;
