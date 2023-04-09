import React from "react";
import { Link } from "react-router-dom";
import styles from "./Style-NavBar.module.scss";

const NavBarComponent = () => {
 
  


  return (
    <>
      <div className={styles.main}>
        <Link to='/'><h3>PokéDatabase</h3></Link>
        <div className={styles.selector}>
          <Link to='/stats'><h2>PokéAPI Info</h2></Link>
          <Link to='/compare'><h2>Compare</h2></Link>
          <Link to='/timeline'><h2>Timeline</h2></Link>
        </div>
      </div>
    </>
  );
};

export default NavBarComponent;
