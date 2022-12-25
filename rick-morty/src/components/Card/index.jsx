import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ character, page }) => {

  return (
    <Link style={{textDecoration: 'none'}} to={`${page}${character.id}`}>
      <div className="card box">
        <img src={character.image} alt={character.name} className="card__img" />
        <h3 className="card__title">{character.name}</h3>
        <p className="card__specie">Specie: {character.species}</p>
        <p className="card__location">Last location: {character.location.name}</p>

        <div className={`card__badge ${character.status.toLowerCase()}`}>
          <h3 className="card__badge--title">{character.status}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
