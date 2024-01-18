import './App.css'
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

function App() {
  const [position, setPosition] = useState({ left: "calc(85% - 100px)", top: "100px" });
  const [correctAnswer] = useState("Absolutamente si")
  const [incorrectAnswer] = useState("Claramente no")
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const moveRandomly = () => {
      const left = (Math.random() * (window.innerWidth - 100)).toString() + "px";
      const top = (Math.random() * (window.innerHeight - 40)).toString() + "px";
      setPosition({ left, top });
    };

    const button = document.getElementById('movableButton');

    if (button) {
      button.addEventListener('mouseover', moveRandomly);
    }

    if (button) {
      button.addEventListener('touchstart', moveRandomly);
    }

    if (button) {
      button.addEventListener('click', moveRandomly);
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseover', moveRandomly);
      }
    };
  }, []);

  const handleButtonClick = () => {
    setShowTooltip(true)
    confetti();
  };

  return (
    <>
      <div className='body'>
        <div className='title'>
          <h1>Me amas?</h1>
        </div>
        <div className='container'>
          <button style={{ position: 'absolute', left: `calc(10% - 25px)`, top: `100px` }} onClick={handleButtonClick}>{correctAnswer}</button>
          <button id='movableButton'
            style={{ position: 'absolute', left: `${position.left}`, top: `${position.top}` }}>{incorrectAnswer}</button>
        </div>
        {showTooltip && (
        <div className="tooltip">
          <h1>Yo tambien te amo mucho</h1>
          <h1>Muak </h1>
        </div>
      )}
      </div>
      
    </>
  )
}

export default App
