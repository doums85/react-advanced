import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '.';

const Decrement = ({ icon = 'bx bx-minus' }) => {
  const { handleDecrement } = useContext(CounterContext);

  return (
    <button className='counter__btn' onClick={handleDecrement}>
      <i className={`${icon} counter__btn--icon`}></i>
    </button>
  );
};

export default Decrement;
