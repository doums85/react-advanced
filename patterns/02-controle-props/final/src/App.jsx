import { useState } from 'react';
import './App.css';
import { Counter } from './components';

function App() {
  const [count, setCount] = useState(0);

  const handleChangeCounter = (newState) => setCount(newState);

  return (
    <section className="container">
      <Counter value={count} onChange={handleChangeCounter}>
        <Counter.Decrement />
        <Counter.Increment />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count max={2} />
      </Counter>
    </section>
  );
}

export default App;
