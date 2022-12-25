import React, { useContext } from 'react';
import { CounterContext } from '.';

const Increment = ({ icon = 'bx bx-plus' }) => {
  const { handleIncrement } = useContext(CounterContext);

  return (
    <button className="counter__btn" onClick={handleIncrement}>
      <i className={`${icon} counter__btn--icon`}></i>
    </button>
  );
};

export default Increment;
