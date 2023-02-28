import React, {useEffect, useState} from 'react';
import { getPokemon } from '../../apiCalls';

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


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
      <Pokemon />
    </div>
  );
}

export default App;
