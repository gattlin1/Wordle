import React, { useState } from 'react';
import './App.scss';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';
import Modal from './components/UI/Modal/Modal';
import useAnswerValidator from './hooks/useAnswerValidator';

function App() {
  const [guesses, setGuesses] = useState(['', '', '', '', '']);
  const [guessCount, setGuessCount] = useState(0);
  const [showIncorectWord, setShowIncorrectWord] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const {
    correctIndices,
    presentIndices,
    correctKeys,
    presentKeys,
    absentKeys,
    validateGuess,
  } = useAnswerValidator();

  const showIncorrectWordModal = () => {
    setShowIncorrectWord(true);
  };

  const closeIncorrectWordModal = () => {
    setShowIncorrectWord(false);
  };

  const showGameOverModal = () => {
    setShowGameOver(true);
  };

  const closeGameOverModal = () => {
    setShowGameOver(false);
  };

  const gameState = {
    guesses: guesses,
    setGuesses: setGuesses,
    guessCount: guessCount,
    setGuessCount: setGuessCount,
    correctKeys: correctKeys,
    presentKeys: presentKeys,
    absentKeys: absentKeys,
    validateGuess: validateGuess,
    showIncorrectWordModal: showIncorrectWordModal,
    showGameOverModal: showGameOverModal,
  };

  return (
    <div className='App'>
      <header>Wordle</header>
      <div className='game-container'>
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
        <Modal isOpen={showIncorectWord} onClose={closeIncorrectWordModal}>
          <div>Not in Word List!</div>
        </Modal>
        <Modal isOpen={showGameOver} onClose={closeGameOverModal}>
          <div>Game Over!</div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
