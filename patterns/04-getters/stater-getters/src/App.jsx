import './App.css';
import { Counter } from './components';
import { useCounter } from './hooks';

function App() {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  const MAX_COUNT = 10;

  return (
    <section className="container">
      <Counter value={count}>
        <Counter.Decrement onClick={handleDecrement} disabled={count === 0} />
        <Counter.Increment onClick={handleIncrement} disabled={count === MAX_COUNT} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count max={MAX_COUNT} />
      </Counter>
    </section>
  );
}

export default App;
