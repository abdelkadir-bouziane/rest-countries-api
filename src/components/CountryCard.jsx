function CountryCard({ countryInfo }) {
  return (
    <article className="country-card">
      {countryInfo.name === "Nepal" ? (
        <div
          className="img"
          style={{
            backgroundImage: `url(${countryInfo.flag})`,
            backgroundPosition: "left",
            backgroundSize: "contain",
          }}
        ></div>
      ) : (
        <div
          className="img"
          style={{ backgroundImage: `url(${countryInfo.flag})` }}
        ></div>
      )}
      <div className="card-info">
        <h3>{countryInfo.name}</h3>
        <ul>
          <li>
            <strong>Population:</strong> {countryInfo.population}
          </li>
          <li>
            <strong>Region:</strong> {countryInfo.region}
          </li>
          <li>
            <strong>Capital:</strong> {countryInfo.capital}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default CountryCard;
