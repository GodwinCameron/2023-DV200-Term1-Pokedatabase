import React from "react";
import styles from'./Style-Compare.module.scss'
import NavBarComponent from "../NavBarComponent/NavBar-Component";
import { useEffect, useState } from "react";
import axios from "axios";
import SimpleCardComponent from "../SimpleCardComponent/SimpleCard-Component";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,RadialLinearScale,PointElement,LineElement,Filler,} from 'chart.js';
import { Bar,Radar } from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,Filler,LineElement,PointElement,RadialLinearScale,);
  
const CompareComponent = () => {

    const [pokeCards1, setPokeCards1] = useState([]);
    const [pokeCards2, setPokeCards2] = useState([]);
    const [compareId1, setCompareId1] = useState();
    const [compareId2, setCompareId2] = useState();


    
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

        let startItem1 = pokeData.map((item) => (
          <SimpleCardComponent
            key={item.id}
            id={item.id}
            pname={item.name}
            plink={item.url}
            setCompareId={setCompareId1}
          />
        ));
        let startItem2 = pokeData.map((item) => (
            <SimpleCardComponent
              key={item.id}
              id={item.id}
              pname={item.name}
              plink={item.url}
              setCompareId={setCompareId2}
            />
          ));
        setPokeCards1(startItem1);
        setPokeCards2(startItem2);
      });
    }, []);

    const [compareName1, setCompareName1] = useState();
    const [compareName2, setCompareName2] = useState();
    const [generalStats1, setGeneralStats1] = useState();
    const [generalStats2, setGeneralStats2] = useState();
    const [compareStats1, setCompareStats1] = useState();
    const [compareStats2, setCompareStats2] = useState();



    useEffect(() => {
        let pushedStats = [];
        let pusheedGeneral = [];
      axios.get("https://pokeapi.co/api/v2/pokemon/"+compareId1)
      .then((res) => {
        setCompareName1(res.data.name)
        res.data.stats.forEach(element => {
            pushedStats.push(element.base_stat)
        });
        setCompareStats1(pushedStats)
        pusheedGeneral.push(res.data.weight, res.data.height, res.data.base_experience, res.data.abilities.length)
        setGeneralStats1(pusheedGeneral)
      })
      .catch((err) => err)
    }, [compareId1])
    useEffect(() => {
        let pushedStats = [];
        let pushedGeneral = [];
        axios.get("https://pokeapi.co/api/v2/pokemon/"+compareId2)
        .then((res) => {
          setCompareName2(res.data.name)
          res.data.stats.forEach(element => {
                pushedStats.push(element.base_stat)
            });
            setCompareStats2(pushedStats)
            pushedGeneral.push(res.data.weight, res.data.height, res.data.base_experience, res.data.abilities.length)
            console.log(pushedGeneral);
            setGeneralStats2(pushedGeneral)
        })
        .catch((err) => err)
      }, [compareId2])
    

      const test = 'hi';

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: compareName1+' vs. '+compareName2,
          },
        },
      };

      const labels = ['Weight', 'Height', 'Base Exp', 'Number of Abilities'];
      const labelsRadar = ['Health', 'Attack', 'Defense', 'SP Attack', 'SP Defense', 'Speed'];


      const barData = {
        labels,
        datasets: [
          {
            label: compareName1,
            data: generalStats1,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: compareName2,
            data: generalStats2,
            backgroundColor: 'rgba(255, 49, 82, 0.5)',
          },
        ],
      };
      
      const radarData = {
        labels: labelsRadar,
        datasets: [
          {
            label: compareName1,
            data: compareStats1,
            backgroundColor: 'rgba(53, 162, 235, 0.2)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: compareName2,
            data: compareStats2,

            backgroundColor: 'rgba(255, 49, 82, 0.2)',
            borderColor: 'rgba(255, 49, 82, 1)',
            borderWidth: 1,
          },
        ],
      };

    return(<div className={styles.main}>
        <NavBarComponent />
        <div className={styles.content}>
            <div className={styles.header}>
                <p>Select two different Pokémon to compare!</p>
            </div>
            <div className={styles.pokemonSelectors}>
                <div className={styles.firstPokemon}>
                    {pokeCards1}
                </div>
                <div className={styles.secondPokemon}>
                    {pokeCards2}
                </div>
            </div>
            <div className={styles.compareCharts}>
                <div className={styles.bar}>
                    <h2>General Stat Comparison</h2>
                    <Bar options={options} data={barData} />
                </div>
                <div className={styles.radar}>
                    <h2>Combat Stat Comparison</h2>
                    <div className={styles.radarChart}><Radar data={radarData} /></div>
                    
                </div>
            </div>

        </div>
    </div>)
}

export default CompareComponent;




































