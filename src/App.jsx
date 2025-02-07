import React, { useState } from 'react';

function App() {
  return (
    <div>
      <HeaderWithButton/>
      <Header title={title} />
      <Header title="venky2" />
    </div>
  );
}

function HeaderWithButton(){
  const [title, setTitle] = useState("my name is harkirat");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;


