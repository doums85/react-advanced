import React, { useEffect, useState } from 'react';
import mixitup from 'mixitup';
import './Filters.css';
import { categories } from './categories';

const Filter = ({ filters, setFilters }) => {
  const [mixer, setMixer] = useState(null);
  const { status, gender, species } = filters;

  useEffect(() => {
    const containerEl = document.querySelector('.filter__options');
    if (containerEl) {
      const mixer = mixitup('.filter__options', {
        selectors: {
          target: '.filter__options--item',
        },
        animation: {
          duration: 300,
        },
      });
      mixer.filter('.status');
      setMixer(mixer);
    }
  }, []);

  const filterHandler = (e) => {
    const selectFilter = e.target.parentNode.className.split(' ').at(-1);
    const value = e.target.innerHTML;

    setFilters((currentState) => ({ ...currentState, [selectFilter]: value }));

    document
      .querySelectorAll('.filter__options--item')
      .forEach((item) => item.classList.remove('active'));
    e.target.parentNode.classList.add('active');
  };

  const clearFilters = () => {
    setFilters((currentState) => ({ ...currentState, status: '', gender: '', species: '' }));
    document
      .querySelectorAll('.filter__options--item')
      .forEach((item) => item.classList.remove('active'));
    mixer.filter('.status');
  };

  return (
    <div className="filter">
      <div className="filter__select">
        {categories.map(({ name }) => (
          <span className={`filter__select--name`} key={name} data-filter={`.${name}`}>
            {name}
          </span>
        ))}

        {status || gender || species ? (
          <span onClick={clearFilters} className="filter__select--clear">
            Clear filters
          </span>
        ) : null}
      </div>

      <div className="filter__options">
        {categories.map(({ options, name }) =>
          options.map((option) => (
            <div key={option} className={`filter__options--item box mix ${name}`}>
              <span onClick={filterHandler} className="filter__options--name">
                {option}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Filter;
