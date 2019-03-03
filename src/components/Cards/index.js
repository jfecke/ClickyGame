import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div  className="card" onClick={props.clickFunction}>
      <img id={props.id} alt={props.id} src={props.image} />
    </div>
  );
}

export default Cards;
