import React, {useEffect, useState} from 'react';
import { getPokemon } from '../../apiCalls';

function App() {

  useEffect(() => {
    getPokemon()
  }, [])
  
  return (
    <p>Hello</p>
  );
}

export default App;
