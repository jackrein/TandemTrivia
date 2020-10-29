import React, { useState } from 'react';
import qBank from './Trivia_Data.json';

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);

  const handleAnswerClick = (answerOption) => {
    const nextQ = currentQ + 1;
    if (nextQ < qBank.length) {
      setCurrentQ(nextQ);
    } else {
      alert('you\'ve reached the end of the game');
    }
  };

  return (
		<div className='app'>
      <div className='question-text'>{qBank[currentQ].question}</div>
      <div className='answer-section'>
        {qBank[currentQ].incorrect.concat(qBank[currentQ].correct).map((answerOption, index) => (
		      <button onClick={() => handleAnswerClick()}>{answerOption}</button>
      	))}
      </div>
    </div>
  );
}
