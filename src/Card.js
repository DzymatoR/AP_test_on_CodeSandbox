import React from "react";

function Card(props) {
  return (
    <div className="f7 bg-orange ma4 pa1 br3 shadow-2 grow">
      <h1>{props.name}</h1>
    </div>
  );
}

export default Card;
