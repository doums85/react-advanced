import React from 'react';
import { useCounterContext } from './CounterProvider';


const Count = ({ max }) => {
  const { count } = useCounterContext()

  return <div className={`${max && count >= max ? 'counter__count danger' : 'counter__count'}`}>{count}</div>;
};

export default Count;
