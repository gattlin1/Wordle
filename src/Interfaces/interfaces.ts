import { Dispatch, SetStateAction } from 'react';

export interface WordleProps {
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
  guessCount: number;
  setGuessCount: Dispatch<SetStateAction<number>>;
}
