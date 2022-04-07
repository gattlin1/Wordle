import React, { useState } from 'react';
import './App.scss';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  const [guesses, setGuesses] = useState(['', '', '', '', '']);
  let [guessCount, setGuessCount] = useState(0);

  return (
    <div className='App'>
      <header>Wordle</header>
      <div className='board-container'>
        <Board
          guesses={guesses}
          setGuesses={setGuesses}
          guessCount={guessCount}
          setGuessCount={setGuessCount}
        />
      </div>
      <div className='keyboard-container'>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
