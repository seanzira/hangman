import React from 'react';
import Hangman from './Hangman';
import './Hangman.css';

const App = () => {
  return (
    <div className="app">
      <h1>Hangman Game</h1>
      <Hangman />
    </div>
  );
};

export default App;
