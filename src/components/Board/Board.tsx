import React, { useEffect, useState } from 'react';
import CharSquare from './CharSquare/CharSquare';
import './Board.scss';

interface BoardProps {
  currentGuess: string;
  guessCount: number;
}

function Board({ currentGuess, guessCount }: BoardProps) {
  const [guesses, setGuesses] = useState(['', '', '', '', '']);

  useEffect(() => {
    const tempGuesses = guesses.slice();
    tempGuesses.splice(guessCount, 1, currentGuess);
    setGuesses(tempGuesses);
  }, []);

  const createGuess = (word: string) => {
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
          {createGuess(guess)}
        </div>
      ))}
    </div>
  );
}

export default Board;
