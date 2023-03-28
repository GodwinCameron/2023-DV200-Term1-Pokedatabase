import React from "react";
import CardComponent from "../CardComponent/Card-Component";
import NavBarComponent from "../NavBarComponent/NavBar-Component";
import styles from "./Style-Landing.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-overlays";

const LandingComponent = () => {
  const [pokeCards, setPokeCards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000")
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

        let startItem = pokeData.map((item) => (
          <CardComponent
            id={item.id}
            pname={item.name}
            plink={item.url}
            setShowModal={setShowModal}
          />
        ));
        setPokeCards(startItem);

        // console.log(pokeData);
      });
  }, []);

  var handleClose = () => setShowModal(false);
  var handleSuccess = () => {
    console.log("success");
  };

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
    <>
      <div className={styles.content}>
        <h1>The PokéDataBase!</h1>
        <p>
          Some caption with something said here Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <NavBarComponent />{" "}
        {/* Change font of first heading on bar, also change size of search field to be bigger*/}
        {/* <ModalComponent /> */}
        <div className="modal-holder">
          <Modal
            className="modal"
            show={showModal}
            onHide={handleClose}
            renderBackdrop={renderBackdrop}
          >
            <div className="main-modal">
              <img className='modal-img' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/500.png' />
              <h1>Emboar</h1>
              <h1>#0500</h1>
            </div>
          </Modal>
        </div>
        <div className={styles.cards}>{pokeCards}</div>
      </div>
    </>
  );
};

export default LandingComponent;

