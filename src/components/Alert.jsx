import React from 'react';

export default function Alert({ rightAnswer, skipTimeout }) {
  return (
    <>
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
