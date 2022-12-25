import './App.css';
import { Counter } from './components';
import { useCounter } from './hooks';

const MAX_COUNT = 10;

function App() {
  const { getCounterProps, getDecrementProps, getIncrementProps } = useCounter({
    initial: 0,
    max: MAX_COUNT,
  });

  return (
    <section className="container">
      <Counter {...getCounterProps()}>
        <Counter.Decrement {...getDecrementProps()} />
        <Counter.Increment {...getIncrementProps()} />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count />

        <button {...getIncrementProps({ onClick: () => console.log('Custom button') })}>
          Increment Button n°2
        </button>
      </Counter>
    </section>
  );
}

export default App;
