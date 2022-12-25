import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Count from './Count';
import Decrement from './Decrement';
import Increment from './Increment';
import Label from './Label';
import './Counter.css';
import { useRef } from 'react';
import { useEffect } from 'react';

export const CounterContext = createContext();
const { Provider } = CounterContext;

const Counter = ({ children, onChange }) => {
  const [count, setCount] = useState(0);

  const firstMounded = useRef(true);

  useEffect(() => {
    if (!firstMounded.current && onChange) onChange(count);

    firstMounded.current = false;
  }, [count, onChange]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(Math.max(0, count - 1));

  return (
    <Provider value={{ count, handleIncrement, handleDecrement }}>
      <div className="container">
        <h1 className="container__title">Counter - Compound component </h1>
        <div className="counter">{children}</div>
      </div>
    </Provider>
  );
};

Counter.Count = Count;
Counter.Label = Label;
Counter.Decrement = Decrement;
Counter.Increment = Increment;

export default Counter;
