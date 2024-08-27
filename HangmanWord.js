import React from 'react';

//method for displaying the hangman word that the user has to guess, according to the user's guesses
const HangmanWord = ({ word, guesses }) => {
  return (
    <div className="hangman-word">
      {word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {guesses.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

//exporting the hangmanword file to be used in other files
export default HangmanWord;
