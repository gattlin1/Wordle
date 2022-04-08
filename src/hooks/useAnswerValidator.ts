import { useEffect, useState } from 'react';
import { possibleAnswers } from '../word-list/possible-answers';

function useAnswerValidator() {
  const [answer, setAnswer] = useState('');
  const [exactMatches, setExactMatches] = useState<boolean[][]>([]);
  const [relativeMatches, setRelativeMatches] = useState<boolean[][]>([]);

  const validateGuess = (guess: string) => {
    const exactMatchIndicdes: boolean[] = [];
    const relativeMatchIndices: boolean[] = [];
    const tempAnswer = answer.slice().toUpperCase();

    // TODO: see how it should be handled if a word has multiple of the same
    // letter. How it works now is if the guess has multiple it will evaluate
    // the first one and ignroe the second. Could potentially be issues if the
    // second occurrence is in the exact position but gets ignored because of
    // how this is functioning.
    guess.split('').forEach((char, i) => {
      if (char === answer.at(i)?.toUpperCase()) {
        exactMatchIndicdes.push(true);
      } else {
        exactMatchIndicdes.push(false);
      }

      if (tempAnswer.includes(char)) {
        relativeMatchIndices.push(true);
        tempAnswer.slice(i, 1);
      } else {
        relativeMatchIndices.push(false);
      }
    });

    const tempExactMatches = exactMatches.slice();
    const tempRelativeMatches = relativeMatches.slice();
    tempExactMatches.push(exactMatchIndicdes);
    tempRelativeMatches.push(relativeMatchIndices);

    setExactMatches(tempExactMatches);
    setRelativeMatches(tempRelativeMatches);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
    setAnswer(possibleAnswers[randomIndex]);
    console.log(possibleAnswers[randomIndex]);
  }, []);

  return { exactMatches, relativeMatches, validateGuess };
}

export default useAnswerValidator;
