import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { getPokemon } from "../../apiCalls";
import Pokemon from "../Pokemon/Pokemon";
import PokeDetails from "../PokeDetails/PokeDetails";
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
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => <Pokemon pokemon={filteredPokemon} />}
        />
        <Route
          exact
          path="/:types"
          render={({ match }) => {
            const types = match.params.types.split("+");
            console.log(types);
            const matchingPokes = filteredPokemon.filter((poke) => {
              const matches = poke.types.filter((type) =>
                types.includes(type.type.name)
              );
              return matches.length;
            });
            return <Pokemon pokemon={matchingPokes} />;
          }}
        />
        <Route
          exact
          path="/:types/:id"
          render={({ match }) => {
            const matchingPokemon = allPokemon.find(
              (poke) => poke.id === +match.params.id
            );
            //return pokedetails page with matchingPokemon passed in
          }}
        />
      </React.Fragment>
      {/* <Pokemon pokemon={filteredPokemon} /> */}
    </div>
  );
}

export default App;
