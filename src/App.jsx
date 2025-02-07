import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("my name is harkirat");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click Me</button>
      <Header title={title} />
      <Header title="venky2" />
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;


