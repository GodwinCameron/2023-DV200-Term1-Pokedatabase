import React from "react";
import styles from "./Style-Card.module.scss";

const CardComponent = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.icon}></div>
        <div className={styles.info}>
          <div className={styles.left}>
            <p>Infernape</p>
            <p>#0392</p>
          </div>
          <div className={styles.right}><div className={styles.type}></div></div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
