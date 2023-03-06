import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './pokemon.css'

const Pokemon = ({ pokemon }) => {
  if(!pokemon.length) {
    return <p>No Pokemon with that name</p>
  }
  const displayPokemon = pokemon.map((poke) => {
    const path = `${poke.types.map(type => type.type.name).join('+')}/${poke.id}`
    return (
      <Link to={path}  key={poke.id}>
        <img id={poke.id} className='img' src={poke.sprites.other["official-artwork"]["front_default"]} />
      </Link>
    );
  });
  return <div className='container'>{displayPokemon}</div>
};

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.array.isRequired
}
