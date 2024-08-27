import React from 'react';

//function for displaying the letters in the alphabet that the user has to choose from
const HangmanButtons = ({ onGuess }) => {

  //array of letters in the alphabet being used as buttons
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="hangman-buttons">
      {alphabet.map(letter => (
        <button key={letter} onClick={() => onGuess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

//export hangmanbuttons so it can be used in other files
export default HangmanButtons;
