import React, {useEffect, useState} from 'react';
import { getPokemon } from '../../apiCalls';
import Pokemon from '../Pokemon/Pokemon';
import Filter from '../Filter/Filter';

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [filterQuery, setFilterQuery] = useState('')


  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true)
      try {
        const data = await getPokemon()
        setAllPokemon(data)
      }
      catch {
        setError('Failed to Fetch Pokemon')
      }
      setLoading(false)
    }
    fetchPokemon()
  }, [])
  
  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <Filter />
      <Pokemon pokemon={allPokemon}/>
    </div>
  );
}

export default App;
