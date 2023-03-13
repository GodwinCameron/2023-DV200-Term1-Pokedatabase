import React from "react";
import { Link } from "react-router-dom";
import styles from "./Style-NavBar.module.scss";

const NavBarComponent = () => {
  return (
    <>
      <div className={styles.main}>
        <Link to='/'><h3>PokéDatabase</h3></Link>
        <div className={styles.selector}>
          <Link to='/stats'><h2>Stats</h2></Link>
          <Link to='/compare'><h2>Compare</h2></Link>
          <Link to='/timeline'><h2>Timeline</h2></Link>
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.search}><input className={styles.searchInput} type={'text'} placeholder='Pokémon name or number'></input><div className={styles.searchBtn}>Search</div></div>
      </div>
    </>
  );
};

export default NavBarComponent;
