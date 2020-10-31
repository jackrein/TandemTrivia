import React, { useState } from 'react';

export default function ScoreCard(props) {
  return(
    <div className='score-section'>
      <div>You scored {props.score} out of 10</div>
      <button id='playBtn' onClick={() => props.restartGame()}>Play Again</button>
    </div>
  );
}
