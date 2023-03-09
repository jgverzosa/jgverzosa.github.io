import React from 'react';
import avatar from "./avatar.svg";
import './App.css';
import Typewriter from './component/Typewriter/Typewriter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <Typewriter text="Hello, world!" />
      </header>
    </div>
  );
}

export default App;
