import Home from "./Home.jsx";
import Error from "./components/Error.jsx";
import CountryDetail from "./components/CountryDetail.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/country" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
