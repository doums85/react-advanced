import React, { createContext, useContext } from 'react';

const CounterContext = createContext();
const { Provider } = CounterContext;

const CounterProvider = ({ children, value }) => {
  return <Provider {...{ value }}>{children}</Provider>;
};

function useCounterContext() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounterContext must be used within a CounterProvider');
  }

  return context;
}

export { CounterProvider, useCounterContext };
