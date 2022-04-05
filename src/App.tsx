import React, { useEffect, useState } from 'react';
import './App.scss';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  let [currentGuess, setCurrentGuess] = useState('');
  let [guessCount, setGuessCount] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardInput);

    return () => {
      document.removeEventListener('keydown', handleKeyboardInput);
    };
  });

  const handleKeyboardInput = (event: any) => {
    const key = event.key;
    const keyCode = event.keyCode;

    if (key === 'Backspace') {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
    // Check to see if input is a letter.
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((currentGuess += key));
      }
    }

    if (key === 'Enter' && currentGuess.length === 5) {
      setGuessCount(guessCount + 1);
    }
  };

  return (
    <div className='App'>
      <header>Wordle</header>
      <div className='board-container'>
        <Board currentGuess={currentGuess} guessCount={guessCount} />
      </div>
      <div className='keyboard-container'>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
