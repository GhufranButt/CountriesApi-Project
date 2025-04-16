import React from "react";
import SearchBar from "./components/SearchBar";
import SelectMenue from "./components/SelectMenue";
import CountriesList from "./components/CountriesList";
import ResetButton from "./components/ResetButton";
import Header from "./components/Header";
import Error from "./components/Error";
import { useState } from "react";
import { Outlet } from "react-router";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  return (
    <div>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <ResetButton setQuery={setQuery} setRegion={setRegion} />
          <SelectMenue setRegion={setRegion} />
        </div>
        <CountriesList query={query} region={region} />
      </main>
      <Outlet />
    </div>
  );
};

export default Home;
