import React, { useState } from 'react';
import './App.scss';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';
import useAnswerValidator from './hooks/useAnswerValidator';

function App() {
  const [guesses, setGuesses] = useState(['', '', '', '', '']);
  const [guessCount, setGuessCount] = useState(0);
  const { exactMatches, relativeMatches, validateGuess } = useAnswerValidator();
  const gameState = {
    guesses: guesses,
    setGuesses: setGuesses,
    guessCount: guessCount,
    setGuessCount: setGuessCount,
    validateGuess: validateGuess,
  };

  return (
    <div className='App'>
      <header>Wordle</header>
      <div className='board-container'>
        <Board
          guesses={guesses}
          exactMatches={exactMatches}
          relativeMatches={relativeMatches}
        />
      </div>
      <div className='keyboard-container'>
        <Keyboard {...gameState} />
      </div>
    </div>
  );
}

export default App;
