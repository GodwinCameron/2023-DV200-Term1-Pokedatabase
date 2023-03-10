import React from "react";
import { Link } from "react-router-dom";
import "./Style-NavBar.scss";

const NavBarComponent = () => {
  return (
    <>
      <div className="main">
        <Link to='/'><h1>PokéDatabase</h1></Link>
        <div className="selector">
          <Link to='/stats'><h2>Stats</h2></Link>
          <Link to='/compare'><h2>Compare</h2></Link>
          <Link to='/timeline'><h2>Timeline</h2></Link>
        </div>
      </div>
    </>
  );
};

export default NavBarComponent;
