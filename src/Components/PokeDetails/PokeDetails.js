import React, {useEffect, useState} from "react";
import PokemonStats from "../PokeStats/Pokestats";
import { getPokeInfo } from "../../apiCalls";

const PokeDetails = ({poke}) => {
 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [pokeInfo, setPokeInfo] = useState({})

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      setLoading(true);
      try {
        const data = await getPokeInfo(poke.id);
        console.log(data)
        setPokeInfo(data);
      } catch {
        setError("Failed to Fetch Pokemon Info");
      }
      setLoading(false);
    };
    fetchPokemonInfo();
  }, [])
  if (!poke) return
  return (
    <div>
      <img src={poke.sprites.other["official-artwork"]["front_default"]}/>
      <PokemonStats pokemon={poke}/>
    </div>
  )
};

export default PokeDetails;
