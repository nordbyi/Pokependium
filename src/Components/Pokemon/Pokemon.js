import React from "react";
import { Link } from "react-router-dom";
import './pokemon.css'

const Pokemon = ({ pokemon }) => {
  const displayPokemon = pokemon.map((poke) => {
    return (
      <Link key={poke.id}>
        <img className='img' src={poke.sprites.other["official-artwork"]["front_default"]} />
      </Link>
    );
  });
  return <div className='container'>{displayPokemon}</div>;
};

export default Pokemon;
