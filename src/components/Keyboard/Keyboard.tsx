import React from 'react';
import { WordleProps } from '../../Interfaces/interfaces';
import KBKey from './KBKey/KBKey';
import './Keyboard.scss';

function Keyboard({
  guesses,
  setGuesses,
  guessCount,
  setGuessCount,
}: WordleProps) {
  // prettier-ignore
  const keyboardKeys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    'Enter', 'Backspace'
  ];
  return (
    <div className='keyboard'>
      {keyboardKeys.map((char) => (
        <KBKey char={char} clicked={setGuesses} />
      ))}
    </div>
  );
}

export default Keyboard;
