import React, { useState } from 'react';
import './App.scss';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  const [guesses, setGuesses] = useState(['', '', '', '', '']);
  const [guessCount, setGuessCount] = useState(0);
  const gameState = {
    guesses: guesses,
    setGuesses: setGuesses,
    guessCount: guessCount,
    setGuessCount: setGuessCount,
  };

  return (
    <div className='App'>
      <header>Wordle</header>
      <div className='board-container'>
        <Board {...gameState} />
      </div>
      <div className='keyboard-container'>
        <Keyboard {...gameState} />
      </div>
    </div>
  );
}

export default App;
