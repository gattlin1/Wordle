import React from 'react';
import { WordleProps } from '../../Interfaces/interfaces';
import './Keyboard.scss';

function Keyboard({
  guesses,
  setGuesses,
  guessCount,
  setGuessCount,
}: WordleProps) {
  // prettier-ignore
  const keyboardKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter', 'Backspace']
  ];

  const handleKeyboardInput = (key: string) => {
    let currentGuess = guesses[guessCount];

    if (key === 'Enter' && currentGuess.length === 5) {
      setGuessCount(guessCount + 1);
    } else if (key === 'Backspace' && currentGuess.length > 0) {
      currentGuess = currentGuess.slice(0, -1);
      updateGuesses(currentGuess);
    } else if (
      key !== 'Enter' &&
      key !== 'Backspace' &&
      currentGuess.length < 5
    ) {
      currentGuess += key;
      updateGuesses(currentGuess);
    }
  };

  const updateGuesses = (guess: string) => {
    const tempGuesses = guesses.slice();
    tempGuesses.splice(guessCount, 1, guess);
    setGuesses(tempGuesses);
  };

  const createKeyboardKey = (key: string) => {
    let kbkey = <i>{key}</i>;
    let keyClasses = ['key'];

    if (key === 'Backspace') {
      kbkey = <i id='backspace' className='fa-solid fa-delete-left'></i>;
      keyClasses.push('backspace');
    }
    if (key === 'Enter') {
      kbkey = <i id='enter'>{key}</i>;
      keyClasses.push('enter');
    }
    return (
      <div
        className={keyClasses.join(' ')}
        onClick={() => handleKeyboardInput(key)}
      >
        {kbkey}
      </div>
    );
  };
  return (
    <div className='keyboard'>
      {keyboardKeys.map((keyboardRow) => (
        <div className='row'>
          {keyboardRow.map((key) => createKeyboardKey(key))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
