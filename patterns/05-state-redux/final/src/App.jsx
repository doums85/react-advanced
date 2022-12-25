import './App.css';
import { Counter } from './components';
import { useCounter } from './hooks';

const MAX_COUNT = 10;
const reducer = (state, action) => {
  switch (action.type) {
    case 'decrement':
      return {
        count: Math.max(0, state.count - 2), //The decrement delta was changed for 2 (Default is 1)
      };
    default:
      return useCounter.reducer(state, action);
  }
};
function App() {
  const { count, handleDecrement, handleIncrement } = useCounter(
    { initial: 0, max: MAX_COUNT },
    reducer
  );

  return (
    <section className="container">
      <Counter value={count}>
        <Counter.Decrement onClick={handleDecrement} />
        <Counter.Increment onClick={handleIncrement} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count />

        <button onClick={handleIncrement} disabled={count === MAX_COUNT}>
          Increment Button n°2
        </button>
      </Counter>
    </section>
  );
}

export default App;
