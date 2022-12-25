import React, { useEffect, useState } from 'react';
import { Card, PageHOC, SelectInput } from '../../components';

const Location = () => {
  //https://rickandmortyapi.com/api/location
  const [location, setLocation] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getLocation() {
      const response = await fetch(`https://rickandmortyapi.com/api/location/${location}`);
      const data = await response.json();

      const responseAllCharacters = await Promise.all(
        data.residents.map((character) => fetch(character).then((res) => res.json()))
      );

      setCharacters(responseAllCharacters);
      setData(data);
    }
    getLocation();
  }, [location]);
  const onChangeHandler = (e) => setLocation(e.target.value);

  const total = [...Array(126).keys()];
  const name = 'location';
  return (
    <section>
      <div className="location bd-container bd-grid">
        <h1 className="section__title section__title-center">
          Location: <span className="location__name">{data?.name || 'Unknown'}</span>
        </h1>
        <h3>
          Type <span className="location__name">{data?.type || 'Unknown'}</span> - Dimensions{' '}
          <span className="location__name">
            {data?.dimension.replace('Dimension', '') || 'Unknown'}
          </span>
        </h3>

        <SelectInput {...{ total, name, onChangeHandler }} />

        <div className="container-cards">
          {characters.map((character, index) => (
            <Card page="/location/" key={index} {...{ character }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageHOC(Location);
