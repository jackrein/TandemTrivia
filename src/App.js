import React, { useState } from 'react';
import qBank from './Trivia_Data.json';
import logo from './TandemTrivia Logo.png'

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answerOption) => {
    if (answerOption === qBank[currentQ].correct) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < 10) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <img className='logo' alt='Tandem Trivia logo' src={logo} />
      <div className='app'>
        {showScore ? (
          <div className='score-section'>You scored {score} out of 10</div>
        ) : (
          <>
            <div className='question-section'>
              <div className='qCount'>
                <span>Question {currentQ+1}</span>/10
              </div>
              <div className='qText'>{qBank[currentQ].question}</div>
            </div>
            <div className='answer-section'>
              {qBank[currentQ].incorrect.concat(qBank[currentQ].correct).map((answerOption, index) => (
                <button onClick={() => handleAnswerClick(answerOption)}>{answerOption}</button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
