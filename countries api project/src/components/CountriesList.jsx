import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";

const CountriesList = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  }, []);

  console.log(countriesData);

  return (
    <div className="countries-container">
      {countriesData.map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            flags={country.flags.svg}
            name={country.name.common}
            population={country.population.toLocaleString("en-IN")}
            region={country.region}
            capital={country.capital ? country.capital[0] : "No capital"}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;
