import React from 'react';
import Count from './Count';
import Decrement from './Decrement';
import Increment from './Increment';
import Label from './Label';
import './Counter.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import { CounterProvider } from './CounterProvider';

const Counter = ({ children, value: count, onChange }) => {
  const firstMounded = useRef(true);

  useEffect(() => {
    if (!firstMounded.current && onChange) onChange(count);

    firstMounded.current = false;
  }, [count, onChange]);

  return (
    <CounterProvider value={{ count }}>
      <div className="container">
        <h1 className="container__title">Counter - Compound component </h1>
        <div className="counter">{children}</div>
      </div>
    </CounterProvider>
  );
};

Counter.Count = Count;
Counter.Label = Label;
Counter.Decrement = Decrement;
Counter.Increment = Increment;

export default Counter;
