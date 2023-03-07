import React from "react";
import "./Style-NavBar.scss";

const NavBarComponent = () => {
  return (
    <>
      <div className="main">
        <h1>PokéDatabase</h1>
        <div className="selector">
          <h2>Stats</h2>
          <h2>Compare</h2>
          <h2>Timeline</h2>
        </div>
      </div>
    </>
  );
};

export default NavBarComponent;
