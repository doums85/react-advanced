import React, { useEffect, useState } from 'react';
import './Episode.css';
import { Card, PageHOC, SelectInput } from '../../components';

const Episode = () => {
  //https://rickandmortyapi.com/api/episode
  const [episode, setEpisode] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getEpisode() {
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${episode}`);
      const data = await response.json();

      const responseAllCharacters = await Promise.all(
        data.characters.map((character) => fetch(character).then((res) => res.json()))
      );

      setCharacters(responseAllCharacters);
      setData(data);
    }
    getEpisode();
  }, [episode]);
  const onChangeHandler = (e) => setEpisode(e.target.value);

  const total = [...Array(51).keys()];
  const name = 'episode';
  return (
    <section>
      <div className="episode bd-container bd-grid">
        <h1 className="section__title section__title-center">
          Episode: <span className="episode__name">{data?.name|| 'Unknown'}</span>
        </h1>
        <h3>Air Date {data?.air_date|| 'Unknown'}</h3>

        <SelectInput {...{ total, name, onChangeHandler }} />

        <div className="container-cards">
          {characters.map((character, index) => (
            <Card page="/episode/" key={index} {...{ character }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageHOC(Episode);
