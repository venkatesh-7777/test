import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Go to gym", description: "Go to gym today" },
    { id: 2, title: "Buy Horlicks", description: "Get Horlicks from the store" },
    { id: 3, title: "Visit Ganesh", description: "Meet Ganesh in the evening" },
  ]);

  function addTodo() {
    const newTodo = {
      id: todos.length + 1, // Generate a unique ID
      title: `Task ${todos.length + 1}`,
      description: `Description for task ${todos.length + 1}`,
    };

    setTodos([...todos, newTodo]); // Correct way to update state
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button> {/* Button with text */}
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
export default App;
