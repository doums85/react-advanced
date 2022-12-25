import './App.css';
import { Accordion, Counter } from './components';
import data from './data.json';

function App() {
  return (
    <section className="accordion container">
      {/*
      <h1 className="container__title">Accordion With Compound Design Pattern</h1>

      <Accordion>
        {data.map(({ question, answer }, index) => (
          <div key={index} className="accordion__item">
            <Accordion.Header>
              <h3 className="accordion__title">{question}</h3>
            </Accordion.Header>

            <Accordion.Content>
              <p className="accordion__description">{answer}</p>
            </Accordion.Content>
          </div>
        ))}
      </Accordion>
      */}

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
