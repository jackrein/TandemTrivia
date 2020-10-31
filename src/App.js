import React, { useState } from 'react';
import qBank from './Trivia_Data.json';
import logo from './TandemTrivia Logo.png';
import QCard from './components/QCard';
import Alert from './components/Alert';

export default function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const restartGame = () => {
    // getQuestions(qBank.sort(() => 0.5 - Math.random()).slice(0, 10));
    setScore(0);
    setShowScore(false);
    // setCurrentQ(0);
  };
  
  return (
    <>
      <img className='logo' alt='Tandem Trivia logo' src={logo} />
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            <div>You scored {score} out of 10</div>
            <button id='playBtn' onClick={() => restartGame()}>Play Again</button>
          </div>
        ) : (
          <QCard/>
        )}
      </div>
      <Alert/>
    </>
  );
}
