import React from "react";
import styles from "./Style-SubNav.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const SubNav = () => {

    const [pokeOpts, setPokeOpts] = useState();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1273")
      .then((response) => {
        let pokemons = response.data.results;

        const pokeData = [];

        for (let i = 0; i < pokemons.length; i++) {
          if (i > 1009) {
            let newId = i - 1009;
            pokeData.push({
              name: pokemons[i].name,
              url: pokemons[i].url,
              id: 10000 + newId,
            });
          } else {
            pokeData.push({
              name: pokemons[i].name,
              url: pokemons[i].url,
              id: i + 1,
            });
          }
        }

        let mappedOptions = pokeData.map((item) => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ));
        setPokeOpts(mappedOptions);
      });
  }, []);

  const pokemonSelect = () => {
    localStorage.setItem('selectedId',document.getElementById('pokemonSelect').value);
    console.log('Local storage changed');
    window.location.reload(true);   
  }

  return (
    <div>
      <div className={styles.subSection}>
        <div className={styles.search}>
          <select id="pokemonSelect" className={styles.searchInput}>
            <option value="">Select a Pokémon</option>
            {pokeOpts}
          </select>
          <div className={styles.searchBtn}>
            <h4 onClick={() => {pokemonSelect();}}>Select</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
