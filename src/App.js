import React, { useEffect, useState } from 'react';
import Characters from './components/Characters';
import { fetchCharacters } from './services/xFiles';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(characters => {
        setCharacters(characters);
      })
  }, [])

  return (
    <Characters characters={characters} />
  );
}

export default App;
