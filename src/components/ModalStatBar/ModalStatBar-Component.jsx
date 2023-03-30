import React from "react";
import styles from "./Style-ModalStatBar.module.scss";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,} from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const ModalStatBar = (props) => {
  const options = {indexAxis: "y",maintainAspectRatio: "false",elements: {bar: {borderWidth: 2,},},responsive: true,plugins: {title: {display: false,},},};

  const labels = ["Health Points","Attack Points","Defence","Special Attack","Special Defense","Speed",];

  const data = {
    labels,
    datasets: [
      {
        label: "Value",
        data: props.modalStats,
        border: "none",
        backgroundColor: ["#66E850","#E85050","#2E54DC","#778FE5","#F439D6","#F59F61",],
      },
    ],
  };

  return (<div className={styles.bar}><Bar options={options} data={data} /></div>);
};

export default ModalStatBar;