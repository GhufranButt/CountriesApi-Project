import React from "react";

const SelectMenue = ({ setRegion }) => {
  return (
    <select
      className="filter-by-region"
      onChange={(e) => setRegion(e.target.value.toLowerCase())}
    >
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SelectMenue;
