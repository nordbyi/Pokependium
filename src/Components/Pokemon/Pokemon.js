import React from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  const displayPokemon = pokemon.map((poke) => {
    return (
      <Link>
        <img
          src={poke.sprites.other["official-artwork"]["front_default"]}
        ></img>
      </Link>
    );
  });
// flex div 
  return <div>{displayPokemon}</div>;
};

export default Pokemon;
