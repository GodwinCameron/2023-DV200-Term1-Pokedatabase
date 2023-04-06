import React, { useState, useEffect, useRef } from 'react';
import styles from './Style-Timeline.module.scss'
import NavBarComponent from "../NavBarComponent/NavBar-Component";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import axios from "axios";
import SubNav from '../NavBarComponent/SubNavComponent/SubNav-Component';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const TimelineComponent = () => {


    const [lineData, setLineData] = useState();
    const [lineLabels, setLineLabels] = useState();
    const [name, setName] = useState();
    const [pokemonExpIcon, setPokemonExpIcon] = useState();

    useEffect(() => {
        let pushedLevels = [];
        let pushedLables = [];

        
        axios.get("https://pokeapi.co/api/v2/pokemon/"+localStorage.getItem('selectedId')+"/")
        .then((res) => {
            setPokemonExpIcon(res.data.sprites.front_default)
        })
      axios.get("https://pokeapi.co/api/v2/pokemon-species/"+localStorage.getItem('selectedId')+"/")
      .then((res) => {
        setName(res.data.name);
        let growthRateUrl = res.data.growth_rate.url;
        axios.get(growthRateUrl)
        .then((res) => {
            for (let i = 0; i < res.data.levels.length; i++) {
                pushedLevels.push({x:res.data.levels[i].level,y:res.data.levels[i].experience});
                pushedLables.push(res.data.levels[i].level);
            }
            setLineData(pushedLevels)
            setLineLabels(pushedLables)
            .catch((err)=>err)  
        }) 
        .catch((err)=>err)
      })   
    },[])
    

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Exp Requirement per Level Up',
          },
        },
    };

    const labels = lineLabels;

    const data = {
        labels,
        datasets: [
          {
            label: 'Exp',
            data: lineData,
            border: 'rgb(255, 63, 63)',
            backgroundColor: 'rgb(255, 63, 63)',
          },
        ],
      };



    return(<div className={styles.main}>
        <NavBarComponent/>
        <SubNav />
        <div className={styles.content}>
            <div className={styles.header}><p>Select a Pokémon to display its comparative exp requirement per level</p></div>
            <h2 className={styles.name}>{name}</h2>
            <div><img src={pokemonExpIcon}/></div>
            <div className={styles.chart}><Line options={options} data={data}/></div>
        </div>
        
    </div>)
}

export default TimelineComponent;







