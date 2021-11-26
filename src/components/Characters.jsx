import React, { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="character-display">
      <h2>Characters</h2>
      {characters.map((character) => (
        <CharacterCard character={character} key={Math.random()} />
      ))}
    </div>
  );
};
