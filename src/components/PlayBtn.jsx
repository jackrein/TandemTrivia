import React from 'react';

export default function PlayBtn({ restartGame }) {
  return (
    <button id='playBtn' onClick={() => restartGame()}>Play Again</button>
  );
}
