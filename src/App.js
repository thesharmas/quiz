import logo from './logo.svg';
import './App.css';
import QuestionCard from './QuestionCard';
import Stop from './Stop';
import React, { useState } from 'react';

function App() {
  let title="Emergency Fund";
  let text="Do you have an emergency fund setup?"
  const [visible, noClick] = useState(0);

  console.log("visible",visible)
  
  return (
    <div className="App">
      
      <QuestionCard questionTitle={title} questionText={text} yesClick={noClick}/>
      {visible ? <Stop title={title}/> : null}
    </div>
  );
}

export default App;
