import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2', 'Another task to do!']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    console.log("I'm working!");
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type='Submit' onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
