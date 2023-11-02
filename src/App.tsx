import React, { useEffect } from 'react';
import avatar from "./avatar.svg";
import './App.css';
import Typewriter from './component/Typewriter/Typewriter';
import TagManager from 'react-gtm-module';
import Face from './component/Avatar/Face';


function App() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-WTN3B2WCQ7' });
  }, []);

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const timeOfDay = currentHour < 12 ? 'morning' : currentHour < 18 ? 'afternoon' : 'evening';


  const words = ["Hello, good " + timeOfDay, "I'm Jomar", "Nice to meet you"]
  return (
    <div className="App">
      <header className="App-header">
        <Face/>
        <Typewriter texts={words} />
      </header>
    </div>
  );
}

export default App;
