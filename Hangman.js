import React, { useState, useEffect } from 'react';
import HangmanWord from './HangmanWord';
import HangmanButtons from './HangmanButtons';
import HangmanStatus from './HangmanStatus';
import words from './Words';

const Hangman = () => {
  //state to store current word
  const [word, setWord] = useState('');

  //state to store guessed letters
  const [guesses, setGuesses] = useState([]);

  //state to store the current game status
  const [status, setStatus] = useState('Playing');

  //state to count the number of wrong guesses
  const [wrongGuesses, setWrongGuesses] = useState(0);

  useEffect(() => {
    // Initializing game with a random word from the words array
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }, []);

  const handleGuess = (letter) => {

    //if function inserted to check if the guessed letter is in the word
    if (word.includes(letter)) {

      //adding the letter to the list of guesses
      setGuesses(prevGuesses => [...prevGuesses, letter]);

      //if function inserted to check if all the letters in the word have been guessed
      if (word.split('').every(l => guesses.includes(l) || l === letter)) {
        setStatus('Won');
      }
    } else {
      
      //incrementing the count of wrong guesses to get to the 6 letters in Hangman
      setWrongGuesses(prevCount => prevCount + 1);

      //if function inserted to change the status to "lost" after the user has guessed incorrectly 6 times
      if (wrongGuesses + 1 >= 6) {
        setStatus('Lost');
      }
    }
  };

  //function for restarting the game with a random word and the default settings
  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuesses([]);
    setWrongGuesses(0);
    setStatus('Playing');
  };

  //help message
  const showHelpMessage = () => {
    alert("Your objective is to guess the hidden word, one letter at a time. You have a limited amount of guesses before losing the game. Each letter you guess correctly, will be displayed in the correct position in the hidden word. Each incorrect guess results in another part being added to the hangman figure, representing the remaining guesses");
  };

  return (
    <div className="game-container">
      <HangmanWord word={word} guesses={guesses} />
      <HangmanButtons onGuess={handleGuess} />
      <HangmanStatus status={status} resetGame={resetGame} />
    </div>
  );
};

//export the Hangman file so that it can be used in other files
export default Hangman;
