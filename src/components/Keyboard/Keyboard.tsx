import React, { useEffect, Dispatch, SetStateAction } from 'react';
import useAllowedWords from '../../hooks/useAllowedWords';
import './Keyboard.scss';

interface KeyboardProps {
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
  guessCount: number;
  setGuessCount: Dispatch<SetStateAction<number>>;
  correctKeys: string[];
  presentKeys: string[];
  absentKeys: string[];
  validateGuess: (guess: string) => void;
}

function Keyboard({
  guesses,
  setGuesses,
  guessCount,
  setGuessCount,
  correctKeys,
  presentKeys,
  absentKeys,
  validateGuess,
}: KeyboardProps) {
  // prettier-ignore
  const keyboardKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter', 'Backspace']
  ];
  const isValidWord = useAllowedWords();

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

    switch (key) {
      case 'Enter':
        if (currentGuess.length === 5 && isValidWord(currentGuess)) {
          validateGuess(currentGuess);
          setGuessCount(guessCount + 1);
        }
        break;
      case 'Backspace':
        currentGuess = currentGuess.slice(0, -1);
        updateGuesses(currentGuess);
        break;
      default:
        if (currentGuess.length < 5) {
          currentGuess += key;
          updateGuesses(currentGuess);
        }
    }
  };

  const updateGuesses = (guess: string) => {
    const tempGuesses = guesses.slice();
    tempGuesses.splice(guessCount, 1, guess);
    setGuesses(tempGuesses);
  };

  const handleKeyStatus = (key: string) => {
    let statusClass = '';

    if (correctKeys.includes(key)) {
      statusClass = 'exact';
    } else if (presentKeys.includes(key)) {
      statusClass = 'relative';
    } else if (absentKeys.includes(key)) {
      statusClass = 'no-match';
    }

    return statusClass;
  };

  const createKeyboardKey = (key: string) => {
    let kbkey = <i>{key}</i>;
    const keyClasses = ['key'];
    keyClasses.push(handleKeyStatus(key));

    if (key === 'Backspace') {
      kbkey = <i className='fa-solid fa-delete-left'></i>;
      keyClasses.push('backspace');
    } else if (key === 'Enter') {
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
