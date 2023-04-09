import React from "react";
import CardComponent from "../CardComponent/Card-Component";
import NavBarComponent from "../NavBarComponent/NavBar-Component";
import styles from "./Style-Landing.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-overlays";
import ModalStatBar from "../ModalStatBar/ModalStatBar-Component";
import ModalStatNut from "../ModalStatNut/ModalStatNut-Component";


const LandingComponent = () => {
  const [pokeCards, setPokeCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState([1,1]);
  const [modalName, setModalName] = useState();


  if (modalId[0] < 906) {
    var modalImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+modalId[0]+".png"
  } else {
    var modalImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+modalId[0]+".png"
  }
  


  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1273")
      .then((response) => {
        let pokemons = response.data.results;

        const pokeData = [];

        for (let i = 0; i < pokemons.length; i++) {
          // if statement logic to correct the continuity discrepancy in the id param on the API side
          if (i > 1009) {
            let newId = i - 1009;
            pokeData.push({name: pokemons[i].name,url: pokemons[i].url,id: 10000 + newId,});
          } else {pokeData.push({name: pokemons[i].name,url: pokemons[i].url,id: i + 1,});}
        }

        let startItem = pokeData.map((item) => (
          <CardComponent key={item.id}id={item.id}pname={item.name}plink={item.url}setShowModal={setShowModal}setModalId={setModalId}/>));
        setPokeCards(startItem);
      });

    


  }, []);

  var handleClose = () => setShowModal(false);
  // boiler code for the modal according to the online guide
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/'+modalId[0]+'/')
    .then((res) => {
      let data = res.data;
      setModalName(data.name);
      setModalStats([data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat]);
      setModalNut([data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat]);
      setModalSprite(data.sprites.front_default);
    })
  }, [modalId])
  
  const [modalStats, setModalStats] = useState([]);
  const [modalNut, setModalNut] = useState([]);
  const [modalSprite, setModalSprite] = useState('');


  

  return (
    <>
      <div className={styles.content}>
        <h1>The PokéDataBase!</h1>
        <p>
          The one-stop site for all you Pokémon data needs! From Pokémon types, to stats, to evolutions and even to
          how they would fair when being compared to other Pokémon or even; who would win in a fight between two 
          Pokémon! This site displays many of the datasets from PokéAPI in componmental based React charts, using Charts.js!
          <br/>
          <br/>
          To get started, click on one of the Pokémon cards displayed below to get some basic stats about them, you can 
          quickly find the Pokémon you're looking for by typing their name or number in the search field below the navbar.
          Or, see more in depth, comprehensive information on Pokémon by clicking on of the tabs!
        </p>
        <NavBarComponent />{" "}
        <div className="modal-holder">
          <Modal className="modal"show={showModal}onHide={handleClose}renderBackdrop={renderBackdrop}>
            <div className="main-modal">
              <div className={styles.modalImage}><img className="modal-img"src={modalImgSrc}/></div>
              <div className={styles.modalDivider}/>
              <h1>{modalName}</h1>
              <p>#{modalId[1]}</p>
              <div className={styles.stats}><p>Stats:</p></div>
              <ModalStatBar modalStats={modalStats}/>
              <div className={styles.stats}><p>Fighting Orientation:</p></div>
              <ModalStatNut modalNut={modalNut}/>
              <div className={styles.sprite}><img className={styles.spriteImg}src={modalSprite} /></div>
            </div>
          </Modal>
        </div>
        <p>Every Pokemon from all regions and series:</p>
        <div className={styles.cards}>{pokeCards}</div>
      </div>
    </>
  );
};

export default LandingComponent;

































