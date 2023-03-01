import React from "react";

const PokeDetails = ({poke}) => {
  return (
    <div>
      <img src={poke.sprites.other["official-artwork"]["front_default"]}/>
    </div>
  )
};

export default PokeDetails;
