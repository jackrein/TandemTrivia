import React, { useState } from 'react';
import qBank from './Trivia_Data.json';
import logo from './TandemTrivia Logo.png'

export default function App() {
  const [questions, getQuestions] = useState(qBank.sort(() => 0.5 - Math.random()).slice(0, 10));
  const [currentQ, setCurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const rightAnswer = questions[currentQ].correct;
  const answers = questions[currentQ].incorrect.concat(rightAnswer).sort(() => 0.5 - Math.random());
  let timer;

  const handleAnswerClick = (answerOption) => {
    if (answerOption === rightAnswer) {
      document.getElementById('alertRight').style.display='block';
      // setScore(score + 1);  // causing qCard to re-render & shuffle answers onClick
    } else {
      document.getElementById('alertWrong').style.display='block';
    }
    timer = setTimeout(changeQ, 5000);
  };

  const changeQ = () => {
    document.getElementById('alertRight').style.display='none';
    document.getElementById('alertWrong').style.display='none';
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  const skipTimeout = () => {
    clearTimeout(timer);
    changeQ();
  };

  const restartGame = () => {
    getQuestions(qBank.sort(() => 0.5 - Math.random()).slice(0, 10));
    setScore(0);
    setShowScore(false);
    setCurrentQ(0);
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
        )}
      </div>
      <div className='alert' id='alertRight'>
        <span className='closeBtn' onClick={() => skipTimeout()}>&times;</span>
        That's correct!
      </div>
      <div className='alert' id='alertWrong'>
        <span className='closeBtn' onClick={() => skipTimeout()}>&times;</span>
        I'm sorry, the correct answer is: {rightAnswer}
      </div>
    </>
  );
}
