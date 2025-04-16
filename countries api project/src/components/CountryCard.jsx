import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, population, region, capital, flags }) => {
  return (
    <Link className="country-card" to={`/country?name=${name}`}>
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
    </Link>
  );
};

export default CountryCard;
