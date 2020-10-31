import React, { useState } from 'react';

export default function QCard({ answers, currentQ, questions, handleAnswerClick }) {
  return (
    <>
      <div className='question-section'>
        <div className='qCount'>
          <span>Question {currentQ+1}</span>/10
        </div>
        <div className='qText'>{questions[currentQ].question}</div>
      </div>
      <div className='answer-section'>
        {answers.map((answerOption, index) => (
            <button onClick={() => handleAnswerClick(answerOption)}>{answerOption}</button>
        ))}
      </div>
    </>
  );
}
