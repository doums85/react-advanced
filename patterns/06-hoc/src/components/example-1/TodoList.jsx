import React from 'react';
import HOC from './HOC';

const TodoList = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((todo, index) => (
          <div key={index}>
            <p>
              <strong>{todo.title}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchTodo = HOC(TodoList, 'todos');

export default SearchTodo;
