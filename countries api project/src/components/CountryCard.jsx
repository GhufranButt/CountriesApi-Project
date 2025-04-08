import React from "react";

const CountryCard = () => {
  return (
    <a className="country-card" href="/country.html?name=Barbados">
      <img src="https://flagcdn.com/bb.svg" alt="Barbados-flag" />
      <div className="card-text">
        <h3 className="card-title">Barbados</h3>
        <p>
          <b>Population: </b>
        </p>
        <p>
          <b>Region:</b>
        </p>
        <p>
          <b>Capital:</b>
        </p>
      </div>
    </a>
  );
};

export default CountryCard;
