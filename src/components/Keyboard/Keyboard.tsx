import React, { useEffect, Dispatch, SetStateAction } from 'react';
import './Keyboard.scss';

interface KeyboardProps {
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
  guessCount: number;
  setGuessCount: Dispatch<SetStateAction<number>>;
}

function Keyboard({
  guesses,
  setGuesses,
  guessCount,
  setGuessCount,
}: KeyboardProps) {
  // prettier-ignore
  const keyboardKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter', 'Backspace']
  ];

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardInput);

    return () => {
      document.removeEventListener('keydown', handleKeyboardInput);
    };
  });

  const handleKeyboardInput = (event: any) => {
    const key: string = event.key;

    if (key === 'Enter' || key === 'Backspace') {
      handleInput(key);
    } else if (keyboardKeys.flat().includes(key.toUpperCase())) {
      handleInput(key.toUpperCase());
    }
  };

  const handleInput = (key: string) => {
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
        onClick={() => handleInput(key)}
        key={key}
      >
        {kbkey}
      </div>
    );
  };
  return (
    <div className='keyboard'>
      {keyboardKeys.map((keyboardRow, i) => (
        <div className='row' key={i}>
          {keyboardRow.map((key) => createKeyboardKey(key))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
