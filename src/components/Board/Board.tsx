import React from 'react';
import CharSquare from './CharSquare/CharSquare';
import './Board.scss';

function Board() {
  const guesses: string[][] = [
    ['S', 'T', 'U', 'F', 'F'],
    ['S', 'T', 'U', 'F', 'F'],
    ['S', 'T', 'U', 'F', 'F'],
    ['S', 'T', 'U', 'F', 'F'],
    ['S', 'T', 'U', 'F', 'F'],
  ];
  return (
    <div className='board'>
      {guesses.map((guess) => {
        return (
          <div className='guess'>
            {guess.map((char) => (
              <CharSquare char={char} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
