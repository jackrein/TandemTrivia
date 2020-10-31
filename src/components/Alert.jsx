import React, { useState } from 'react';

function Alert(props) {
  return (
    <>
      <div className='alert' id='alertRight'>
        <span className='closeBtn' onClick={() => props.skipTimeout()}>&times;</span>
        That's correct!
      </div>
      <div className='alert' id='alertWrong'>
        <span className='closeBtn' onClick={() => props.skipTimeout()}>&times;</span>
        I'm sorry, the correct answer is: {props.rightAnswer}
      </div>
    </>
  );
}

export default Alert;