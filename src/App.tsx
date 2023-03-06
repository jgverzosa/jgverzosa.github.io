import React from 'react';
import avatar from "./avatar.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <p>
          Jomar Verzosa
        </p>
      </header>
    </div>
  );
}

export default App;
