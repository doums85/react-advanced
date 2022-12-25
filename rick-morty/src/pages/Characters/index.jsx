import React, { useEffect, useState } from 'react';
import './Characters.css';
import { Card, Filters, PageHOC, Pagination, Search } from '../../components';

const Characters = () => {
  const objFilters = { page: 1, status: '', gender: '', species: '', search: '' };
  const [filters, setFilters] = useState(objFilters);
  const [data, setData] = useState(null);

  useEffect(() => {
    const { page, status, gender, species, search } = filters;

    async function getData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`
      );
      if (response.ok) {
        const data = await response.json();
        setData({ ...data });
      }
    }

    getData();
  }, [filters]);

  return (
    <section>
      <div className="characters__container bd-container bd-grid">
        <Search {...{ setFilters }} />
        <Filters {...{ filters, setFilters }} />
        <div className="container-cards">
          {data ? data?.results.map((character, index) => (
            <Card page="/" key={index} {...{ character }} />
          )) : <h2>No character found</h2>}
        </div>
        <Pagination info={data?.info} {...{ setFilters }} />
      </div>
    </section>
  );
};

export default PageHOC(Characters);
