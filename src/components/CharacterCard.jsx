import React from "react";

export const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <h3 className="card-title">{character.name}</h3>

      <div className="img-container">
        <img src={character.image} alt="" className="card-img" />
      </div>
    </div>
  );
};
