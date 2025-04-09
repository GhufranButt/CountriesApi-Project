import React from "react";

const ResetButton = ({ setQuery, setRegion }) => {
  const resetHandler = () => {
    setQuery("");
    setRegion("");
  };

  return (
    <button className="button" onClick={resetHandler}>
      Want to reset?
    </button>
  );
};

export default ResetButton;
