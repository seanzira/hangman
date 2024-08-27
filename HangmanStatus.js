import React from 'react';

//function for displaying the status of the game 
const HangmanStatus = ({ status, resetGame }) => {
  return (
    <div className="hangman-status">
      <p>Status: {status}</p>
      {status !== 'Playing' && <button onClick={resetGame}>Restart Game</button>}
    </div>
  );
};

//export HangmanStatus so it can be used in other files
export default HangmanStatus;
