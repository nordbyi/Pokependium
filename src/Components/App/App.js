import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { getPokemon } from "../../apiCalls";
import Pokemon from "../Pokemon/Pokemon";
import Filter from "../Filter/Filter";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const filtered = allPokemon.filter((poke) =>
      poke.name.includes(filterQuery.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [filterQuery, allPokemon]);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const data = await getPokemon();
        setAllPokemon(data);
      } catch {
        setError("Failed to Fetch Pokemon");
      }
      setLoading(false);
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <Filter passFilter={setFilterQuery} />
      <Pokemon pokemon={filteredPokemon} />
    </div>
  );
}

export default App;
