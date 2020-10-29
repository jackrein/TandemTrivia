import React from 'react';
import qBank from './Trivia_Data.json';

export default function App() {
  return (
		<div className='app'>
      <div className='question-text'>{qBank[0].question}</div>
      <div className='answer-section'>
        {qBank[0].incorrect.concat(qBank[0].correct).map((answerOption, index) => (
		      <button>{answerOption}</button>
      	))}
      </div>
    </div>
  );
}
