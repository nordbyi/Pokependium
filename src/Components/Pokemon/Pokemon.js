import React from "react";
import { Link } from "react-router-dom";
import './pokemon.css'

const Pokemon = ({ pokemon }) => {
  const displayPokemon = pokemon.map((poke) => {
    const path = poke.types.map(type => type.type.name).join('+')
    return (
      <Link to={path} key={poke.id}>
        <img className='img' src={poke.sprites.other["official-artwork"]["front_default"]} />
      </Link>
    );
  });
  return <div className='container'>{displayPokemon}</div>;
};

export default Pokemon;
