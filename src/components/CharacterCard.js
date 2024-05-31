import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={process.env.PUBLIC_URL + '/images/' + character.img} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.occupation}</p>
    </div>
  );
}

export default CharacterCard;
