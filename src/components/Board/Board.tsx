import React from 'react';
import CharSquare from './CharSquare/CharSquare';
import './Board.scss';

interface BoardProps {
  guesses: string[];
}
function Board({ guesses }: BoardProps) {
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
