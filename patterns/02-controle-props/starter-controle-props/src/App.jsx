import './App.css';
import { Counter } from './components';

function App() {
  return (
    <section className="container">
      <Counter onChange={(count) => console.log(count)}>
        <Counter.Decrement />
        <Counter.Increment />
        <Counter.Label>Counter</Counter.Label>
        <Counter.Count max={2} />
      </Counter>
    </section>
  );
}

export default App;
