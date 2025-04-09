import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenue from "./components/SelectMenue";
import CountriesList from "./components/CountriesList";
import ResetButton from "./components/ResetButton";

function App() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <ResetButton setQuery={setQuery} setRegion={setRegion} />
          <SelectMenue setRegion={setRegion} />
        </div>
        <CountriesList query={query} region={region} />
      </main>
    </>
  );
}

export default App;
