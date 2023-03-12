import React, { useEffect } from 'react';
import avatar from "./avatar.svg";
import './App.css';
import Typewriter from './component/Typewriter/Typewriter';
import TagManager from 'react-gtm-module';


function App() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-WTN3B2WCQ7' });
  }, []);

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const timeOfDay = currentHour < 12 ? 'morning' : currentHour < 18 ? 'afternoon' : 'evening';


  const words = ["Hello, good " + timeOfDay, "I'm Jomar - a codist", "Nice to meet you"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <Typewriter texts={words} />
      </header>
    </div>
  );
}

export default App;
