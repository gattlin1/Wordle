import { useEffect, useState } from 'react';
import { allowedWordsList } from '../word-list/allowed-words';

function useAllowedWords() {
  const [allowedWords, setAllowedWords] = useState(['']);

  const isValidWord = (word: string) => {
    return allowedWords.includes(word.toLowerCase());
  };

  useEffect(() => {
    setAllowedWords(allowedWordsList);
  }, []);

  return isValidWord;
}

export default useAllowedWords;
