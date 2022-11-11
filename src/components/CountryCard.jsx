import { Link } from "react-router-dom";
import { numberWithCommas } from "../context/countries/CountriesActions";

function CountryCard({ countryInfo }) {
  return (
    <article className="country-card">
      <div
        className="img"
        style={
          countryInfo.commonName === "Nepal"
            ? {
                backgroundImage: `url(${countryInfo.flag})`,
                backgroundPosition: "left",
                backgroundSize: "contain",
              }
            : { backgroundImage: `url(${countryInfo.flag})` }
        }
      ></div>
      <div className="card-info">
        <h3>
          {countryInfo.commonName}
          <span>{countryInfo.officialName}</span>
        </h3>
        <ul>
          <li>
            <strong>Population: </strong>
            {numberWithCommas(countryInfo.population)}
          </li>
          <li>
            <strong>Region: </strong>
            {countryInfo.region}
          </li>
          <li>
            <strong>Capital: </strong>
            {countryInfo.capital}
          </li>
        </ul>
      </div>
      <Link
        to={`/country/${countryInfo.commonName}`}
        className="before-country-card"
      ></Link>
    </article>
  );
}

export default CountryCard;
