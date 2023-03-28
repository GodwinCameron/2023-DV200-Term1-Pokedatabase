import axios from "axios";
import React from "react";
import styles from "./Style-Card.module.scss";
import { useState, useEffect } from "react";

const CardComponent = (props) => {
  const zeroPad = (num, places) => String(num).padStart(places, "0");


  

  // The code below creates dynamic images for each pokemon using seperate calls for each one, though I identified
  // a common URL structure and will semi-hardcode the images instead to reduce the amount of calls, this is only
  // possible if the backend is structed in a way that allows me to generate IDs that correlate with the URL as each
  // card has a unique pokemon ID that I created using a simple for loop to add an incremental ID to each pokemon card
  // ===================================================================================================================
  // const [pic, setPic] = useState([]);

  // axios.get(props.plink)
  // .then((response) => {
  //   let data = response.data;
  //   let pic = data.sprites.other.dream_world.front_default;
  //   setPic(pic);
  // } )
  // ===================================================================================================================


  if (props.id == 10143) {
    var iconLink =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10143.png";
  } else if (props.id == 10145) {
    var iconLink =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png";
  } else {
    var iconLink =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      props.id +
      ".png";
  }


  return (
    <>
      <div onClick={() => props.setShowModal(true)} className={styles.main}>
        {/* <div className={styles.icon}><img src={pic} className={styles.picon}/></div> =============================== THIS FORMS PART OF THE DYNAMIC ICONS BUT INCREASES THE TOTAL AXIOS CALLS*/}
        <div className={styles.icon}>
          <img src={iconLink} className={styles.picon} />
        </div>{" "}
        {/* THIS ALLOWS FOR DYNAMIC ICON PICTURES WITH INSTANT LOAD TIME AND NO EXTRA API CALLS, THOUGH IT REQUIRES FAMILIARITY WITH THE API AND AWARENESS OF THE BACKEND STRUCTURE USING ID GENERATION TO MATCH*/}
        <div className={styles.info}>
          <div className={styles.left}>
            <p>{props.pname}</p>
            <p>#{zeroPad(props.id, 4)}</p>
          </div>
          <div className={styles.right}>
            <div className={styles.type}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;