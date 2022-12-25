import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import { PageHOC } from '../../components';

const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function getCharacter() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (response.ok) {
        const data = await response.json();

        setCharacter(data);
      }
    }

    getCharacter();
  }, [id]);

  if (!character)
    return (
      <section>
        <h1>This character doesn't exist</h1>
      </section>
    );

  return (
    <section>
      <div className="detail bd-container bd-grid">
        <h1 className="section__title section title-center">{character?.name}</h1>
        <img src={character?.image} alt={character?.name} className="detail__img" />

        <div className={`detail__badge ${character?.status.toLowerCase()}`}>
          <h3>{character?.status}</h3>
        </div>

        <ul className="detail__list">
          <li>
            Genre : <span>{character?.gender}</span>
          </li>
          <li>
            Species : <span>{character?.species}</span>
          </li>
          <li>
            Origin : <span>{character?.origin.name}</span>
          </li>
          <li>
            Location : <span>{character?.location.name}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHOC(Details);
