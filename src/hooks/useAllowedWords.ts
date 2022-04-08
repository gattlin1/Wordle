import { useEffect, useState } from 'react';
import { allowedWordsList } from '../word-list/allowed-words';

function useAllowedWords() {
  const [allowedWords, setAllowedWords] = useState(['']);

  useEffect(() => {
    setAllowedWords(allowedWordsList);
  }, []);

  return allowedWords;
}

export default useAllowedWords;
