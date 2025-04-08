import React from "react";

const CountryCard = ({ name, population, region, capital, flags }) => {
  return (
    <a className="country-card" href={`/country.html?name=${name}`}>
      <img src={flags} alt={name} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: {population}</b>
        </p>
        <p>
          <b>Region :</b> {region}
        </p>
        <p>
          <b>Capital :</b> {capital}
        </p>
      </div>
    </a>
  );
};

export default CountryCard;
