import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '.';

const Count = ({ max }) => {
  const { count } = useContext(CounterContext);

  return <div className={`${max && count >= max ? 'counter__count danger' : 'counter__count'}`}>{count}</div>;
};

export default Count;
