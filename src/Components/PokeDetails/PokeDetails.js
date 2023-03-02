import React, { useEffect, useState } from "react";
import PokemonStats from "../PokeStats/Pokestats";
import { getPokeInfo } from "../../apiCalls";
import "./PokeDetails.css";

const PokeDetails = ({ poke }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pokeInfo, setPokeInfo] = useState([]);

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getPokeInfo(poke.id);
        console.log(data);
        setPokeInfo(data["flavor_text_entries"]);
      } catch {
        setError("Failed to Fetch Pokemon Info");
      }
      setLoading(false);
    };
    fetchPokemonInfo();
  }, [poke]);

  if (!poke) return;

  const capFirstLetter = poke.name.charAt(0).toUpperCase();
  const capitalizedName = capFirstLetter + poke.name.slice(1);

  const flavorText = (arr) => {
    return arr
      .filter((el) => el.language.name === "en")
      .map((el) => <p><strong>{el.version.name.split('-').join(' ')}: </strong>{el.flavor_text}</p>)
      // .map((el) => `${el.version.name}: ${el.flavor_text}`)
      // .map((el) => <p>{el}</p>);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <div className="details-container">
          <div className="img-name">
            <img
              className="details-img"
              src={poke.sprites.other["official-artwork"]["front_default"]}
            />
            <p>{capitalizedName}</p>
          </div>
          <PokemonStats pokemon={poke} />
          <div className="flavor">{flavorText(pokeInfo)}</div>
        </div>
      )}
    </div>
  );
};

export default PokeDetails;
