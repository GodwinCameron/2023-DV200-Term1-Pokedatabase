import React from "react";
import CardComponent from "../CardComponent/Card-Component";
import NavBarComponent from "../NavBarComponent/NavBar-Component";
import styles from "./Style-Landing.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-overlays";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
);

const LandingComponent = () => {
  const [pokeCards, setPokeCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState([1,1]);
  const [modalName, setModalName] = useState();


  var modalImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+modalId[0]+".png"


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
            key={item.id}
            id={item.id}
            pname={item.name}
            plink={item.url}
            setShowModal={setShowModal}
            setModalId={setModalId}
          />
        ));
        setPokeCards(startItem);
      });

    


  }, []);

  var handleClose = () => setShowModal(false);
  var handleSuccess = () => {
    console.log("success");
  };

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/'+modalId[0]+'/')
    .then((res) => {
      let data = res.data;
      setModalName(data.name);
      setModalStats([data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat]);
      setModalNutt([data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat]);
      setModalSprite(data.sprites.front_default);
    })
  }, [modalId])
  
  const [modalStats, setModalStats] = useState([]);
  const [modalNutt, setModalNutt] = useState([]);
  const [modalSprite, setModalSprite] = useState('');


  const options = {
    indexAxis: 'y',
    maintainAspectRatio: 'false',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  const labels = ['Health Points', 'Attack Points','Defence','Special Attack', 'Special Defense','Speed'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Value',
        data: modalStats,
        border: 'none',
        backgroundColor: ['#66E850', '#E85050', '#2E54DC', '#778FE5','#F439D6','#F59F61'],
      }
    ],
  };

  const data2 = {
    labels: ['Health', 'Attack', 'Defense'],
    datasets: [
      {
        label: 'Value',
        data: modalNutt,
        backgroundColor: [
          '#7CFF4E',
          '#FF4E4E',
          '#22CFF5',
          
        ],
        borderColor: [
          '#7CFF4E',
          '#FF4E4E',
          '#22CFF5',
          
        ],
        borderWidth: 1,
      },
    ],
  };


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
        <div className="modal-holder">
          <Modal
            className="modal"
            show={showModal}
            // info about api in stats page like number of types of pokemon

            // add timeline info on timeline page (look closely at the brief for this)
            // add compare page
            // repeat functionality of modal on stats page
            // complete card by having dynamic type icon
            // move chart elements to separate components for cleaner landing page (Tsebo's advice)
            // tweak styling (maybe add some padding to the whole app?)

            // add compare functionality through means of a button on card for SPAA (if possible)


            onHide={handleClose}
            renderBackdrop={renderBackdrop}
          >
            <div className="main-modal">
              <div className={styles.modalImage}><img className="modal-img"src={modalImgSrc}/></div>
              <div className={styles.modalDivider}/>
              <h1>{modalName}</h1>
              <p>#{modalId[1]}</p>
              <div className={styles.stats}><p>Stats:</p></div>
              <div className={styles.bar}><Bar options={options} data={data} /></div>
              <div className={styles.nutt}><Doughnut data={data2} /></div>
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

































