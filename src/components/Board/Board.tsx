import React, { useEffect } from 'react';
import CharSquare from './CharSquare/CharSquare';
import { WordleProps } from '../../Interfaces/interfaces';
import './Board.scss';

function Board({
  guesses,
  setGuesses,
  guessCount,
  setGuessCount,
}: WordleProps) {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardInput);

    return () => {
      document.removeEventListener('keydown', handleKeyboardInput);
    };
  });

  const handleKeyboardInput = (event: any) => {
    const key: string = event.key;
    const keyCode = event.keyCode;
    let currentGuess = guesses[guessCount];

    if (key === 'Enter' && currentGuess.length === 5) {
      setGuessCount(guessCount + 1);
    } else if (key === 'Backspace' && currentGuess.length > 0) {
      currentGuess = currentGuess.slice(0, -1);
      updateGuesses(currentGuess);
    } else if (
      // Check to see if input is a letter.
      ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) &&
      currentGuess.length < 5
    ) {
      currentGuess += key.toUpperCase();
      updateGuesses(currentGuess);
    }
  };

  const updateGuesses = (guess: string) => {
    const tempGuesses = guesses.slice();
    tempGuesses.splice(guessCount, 1, guess);
    setGuesses(tempGuesses);
  };

  const createGuessBlock = (word: string) => {
    const guess = [];
    for (let i = 0; i < 5; i++) {
      guess.push(<CharSquare key={i} char={word.at(i)} />);
    }

    return guess;
  };

  return (
    <div className='board'>
      {guesses.map((guess, i) => (
        <div className='guess' key={i}>
          {createGuessBlock(guess)}
        </div>
      ))}
    </div>
  );
}

export default Board;
