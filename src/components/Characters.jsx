import React, { useEffect, useReducer, useState } from "react";
import { favoritesReducer } from "../reducer/favoritesReducer";

//add to favorites using useReducer
//1.declaramos el estado inicial:
const initialState = {
  favorites: [],
};

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  //2.Declaramos el reducer
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  const handleClick = (favorite) => {
    dispatch({
      type: "Add_to_favorites",
      payload: favorite,
    });
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="character-display">
      <h2>Favorites</h2>
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
      <h2>Characters</h2>
      <div className="cards-layout">
        {characters.map((character) => (
          <div className="cards" key={character.id}>
            <h6 className="cards-title">{character.name}</h6>
            <div className="img-container">
              <img src={character.image} alt="" className="cards-img" />
            </div>
            <button
              className="button d-flex justify-content-center mt-4"
              onClick={() => handleClick(character)}
            >
              <i className="far fa-heart text-danger fs-3 pointer"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
