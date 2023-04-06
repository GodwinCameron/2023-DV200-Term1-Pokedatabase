import React from "react";
import styles from "./Style-SimpleCard.module.scss";
import { useState } from "react";

const SimpleCardComponent = (props) => {
  
  const [isActive, setIsActive] = useState(false);


    if (props.id===10192||props.id===10129||props.id===10187||props.id===10158||props.id===10153||props.id===1010||props.id===10183||props.id===10182||props.id===10181||props.id===10160||props.id===10159||props.id===10154||props.id===10128||props.id===10146||props.id===1009) {
      var iconLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+props.id +".png";
    } else {
    var iconLink ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+props.id+".png";
    }

  
  const clickHandler = () => {
    setIsActive(current => !current);
    // localStorage.setItem("selectedId",props.id)
    props.setCompareId(props.id)
  }




  return (
    <div id={props.id} onClick={clickHandler}  className={[styles.icon, isActive ? 'active' : ''].join(' ')}>
      <img src={iconLink} className={styles.picon} />
    </div>
  );
};

export default SimpleCardComponent;
