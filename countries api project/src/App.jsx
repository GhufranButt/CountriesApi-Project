import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenue from "./components/SelectMenue";
import CountriesList from "./components/CountriesList";

function App() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenue setRegion={setRegion} />
        </div>
        <CountriesList query={query} region={region} />
      </main>
    </>
  );
}

export default App;
