import React, { useState } from 'react';
import './App.scss';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';
import Modal from './components/UI/Modal/Modal';
import useAnswerValidator from './hooks/useAnswerValidator';

function App() {
  const [guesses, setGuesses] = useState(['', '', '', '', '']);
  const [guessCount, setGuessCount] = useState(0);
  const {
    correctIndices,
    presentIndices,
    correctKeys,
    presentKeys,
    absentKeys,
    validateGuess,
  } = useAnswerValidator();
  const gameState = {
    guesses: guesses,
    setGuesses: setGuesses,
    guessCount: guessCount,
    setGuessCount: setGuessCount,
    correctKeys: correctKeys,
    presentKeys: presentKeys,
    absentKeys: absentKeys,
    validateGuess: validateGuess,
  };

  return (
    <div className='App'>
      <header>Wordle</header>
      <div className='board-container'>
        <Board
          guesses={guesses}
          guessCount={guessCount}
          correctIndices={correctIndices}
          presentIndices={presentIndices}
        />
      </div>
      <div className='keyboard-container'>
        <Keyboard {...gameState} />
      </div>
      <Modal />
    </div>
  );
}

export default App;
