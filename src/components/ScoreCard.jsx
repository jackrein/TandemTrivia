import React from 'react';
import PlayBtn from './PlayBtn';

export default function ScoreCard({ score, restartGame }) {
  return(
    <div className='score-section'>
      <div>You scored {score} out of 10</div>
      <PlayBtn restartGame={restartGame} />
    </div>
  );
}
