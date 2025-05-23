import React from "react";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p>
          <i className="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
