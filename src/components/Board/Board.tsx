import React from 'react';
import CharSquare from './CharSquare/CharSquare';
import './Board.scss';

interface BoardProps {
  guesses: string[];
  guessCount: number;
  correctIndices: boolean[][];
  presentIndices: boolean[][];
}

function Board({
  guesses,
  guessCount,
  correctIndices,
  presentIndices,
}: BoardProps) {
  const createGuessBlock = (word: string, currentRow: number) => {
    const guess = [];
    for (let i = 0; i < 5; i++) {
      let squareClass = '';

      if (guessCount > currentRow) {
        const present =
          presentIndices[currentRow] && presentIndices[currentRow][i];
        const correct =
          correctIndices[currentRow] && correctIndices[currentRow][i];

        if (correct) {
          squareClass = 'correct';
        } else if (present) {
          squareClass = 'present';
        } else {
          squareClass = 'absent';
        }
      }

      guess.push(
        <CharSquare className={squareClass} key={i} char={word.at(i)} />
      );
    }

    return guess;
  };

  return (
    <div className='board'>
      {guesses.map((guess, i) => (
        <div className='guess' key={i}>
          {createGuessBlock(guess, i)}
        </div>
      ))}
    </div>
  );
}

export default Board;
