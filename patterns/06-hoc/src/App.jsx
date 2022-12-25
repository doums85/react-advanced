import './App.css';
import { Bags, TodoList, UserList, Watches } from './components';

function App() {
  return (
    <div className="App">
      {/*       <UserList />
      <hr />
      <TodoList /> */}
      <Watches />
      <Bags />
    </div>
  );
}

export default App;
