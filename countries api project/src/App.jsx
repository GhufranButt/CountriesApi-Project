import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenue from "./components/SelectMenue";
import CountriesList from "./components/CountriesList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenue />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  );
}

export default App;
