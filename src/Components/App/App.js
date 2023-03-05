import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { getPokemon } from "../../apiCalls";
import Pokemon from "../Pokemon/Pokemon";
import PokeDetails from "../PokeDetails/PokeDetails";
import Filter from "../Filter/Filter";
import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./App.css";

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
    <div className="screen">
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {!loading && <Nav pokemon={allPokemon} />}
      {!loading && (
        <React.Fragment>
          <ScrollToTop />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="main">
                  <Filter passFilter={setFilterQuery} />
                  <Pokemon pokemon={filteredPokemon} />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/:types"
            render={({ match }) => {
              const types = match.params.types.split("+");
              const matchingPokes = filteredPokemon.filter((poke) => {
                // const matches = poke.types.filter((type) =>
                //   types.includes(type.type.name)
                // );
                // return matches.length;
                const typeNames = poke.types.map((type) => type.type.name);
                // console.log(types.every(type => typeNames.includes(type)))
                return types.every((type) => typeNames.includes(type));
              });
              return (
                <div className="main">
                  <Filter passFilter={setFilterQuery} />
                  <Pokemon pokemon={matchingPokes} />
                </div>
              );
            }}
          />
          <Route
            exact
            path="/:types/:id"
            render={({ match }) => {
              const matchingPokemon = allPokemon.find(
                (poke) => poke.id === +match.params.id
              );
              return <PokeDetails poke={matchingPokemon} />;
            }}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
