import React from 'react';
import CharSquare from './CharSquare/CharSquare';
import './Board.scss';

interface BoardProps {
  guesses: string[];
  exactMatches: boolean[][];
  relativeMatches: boolean[][];
}

function Board({ guesses, exactMatches, relativeMatches }: BoardProps) {
  const createGuessBlock = (word: string, guessCount: number) => {
    const guess = [];
    for (let i = 0; i < 5; i++) {
      let squareClass = '';
      if (
        relativeMatches[guessCount] &&
        relativeMatches[guessCount][i] !== undefined
      ) {
        if (relativeMatches[guessCount][i]) squareClass = 'relative';
      }

      if (
        exactMatches[guessCount] &&
        exactMatches[guessCount][i] !== undefined
      ) {
        if (exactMatches[guessCount][i]) squareClass = 'exact';
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
