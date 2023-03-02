import React from "react";
import './PokeStats.css'

const PokemonStats = ({ pokemon }) => {
  const stats = pokemon.stats.map((stat) => {
    return (
      <p key={stat.stat.url}>
        {stat.stat.name}: {stat.base_stat}
      </p>
    );
  });
  return (
    <div className="stats">
      <p>Height: {((pokemon.height / 10) * 3.28084).toFixed(2)} feet</p>
      <p>Weight: {((pokemon.weight / 10) * 2.20462).toFixed(2)} pounds</p>
      <h3>Base Stats</h3>
      {stats}
    </div>
  );
};

export default PokemonStats;