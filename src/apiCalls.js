const getPokemon = async () => {
  const InitialFetch = await fetch("http://pokeapi.co/api/v2/pokemon/?limit=5");
  const pokemonList = await InitialFetch.json();
  const AllPokemon = await Promise.all(
    pokemonList.results.map(async (poke) => {
      const resp = await fetch(poke.url);
      return await resp.json();
    })
  );
  console.log(AllPokemon);
  return AllPokemon;
};

export { getPokemon };
