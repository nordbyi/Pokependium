import React, { useEffect, useState } from "react";
import PokemonStats from "../PokeStats/Pokestats";
import { getPokeInfo } from "../../apiCalls";

const PokeDetails = ({ poke }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pokeInfo, setPokeInfo] = useState([]);

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      setLoading(true);
      setError('')
      try {
        const data = await getPokeInfo(poke.id);
        console.log(data);
        setPokeInfo(data['flavor_text_entries']);
      } catch {
        setError("Failed to Fetch Pokemon Info");
      }
      setLoading(false);
    };
    fetchPokemonInfo();
  }, [poke]);


  if(!poke) return

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <div>
          <img src={poke.sprites.other["official-artwork"]["front_default"]} />
          <PokemonStats pokemon={poke} />
        </div>
      )}
    </div>
  );
};

export default PokeDetails;
