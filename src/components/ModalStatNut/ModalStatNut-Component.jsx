import React from "react";
import styles from "./Style-ModalStatNut.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ModalStatNut = (props) => {
  const data = {
    labels: ['Health', 'Attack', 'Defense'],
    datasets: [
      {
        label: 'Value',
        data: props.modalNut,
        backgroundColor: ['rgba(124, 255, 78, 0.1)','rgba(255, 78, 78, 0.1)','rgba(34, 207, 245, 0.11)',],
        borderColor: ['#7CFF4E','#FF4E4E','#22CFF5',],
        borderWidth: 1,
      },
    ],
  };


  return (<div className={styles.nut}><Doughnut data={data} /></div>);
};

export default ModalStatNut;