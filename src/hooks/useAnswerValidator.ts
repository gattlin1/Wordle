import { useEffect, useState } from 'react';
import { possibleAnswers } from '../word-list/possible-answers';

function useAnswerValidator() {
  const [answer, setAnswer] = useState('');
  const [exactMatches, setExactMatches] = useState<boolean[][]>([]);
  const [relativeMatches, setRelativeMatches] = useState<boolean[][]>([]);
  const [exactMatchKeys, setExactMatchKeys] = useState<string[]>([]);
  const [relativeMatchKeys, setRelativeMatchKeys] = useState<string[]>([]);
  const [noMatchKeys, setNoMatchKeys] = useState<string[]>([]);

  const validateGuess = (guess: string) => {
    const exactMatchIndicdes: boolean[] = [];
    const relativeMatchIndices: boolean[] = [];
    const exactKeys: string[] = [];
    const relativeKeys: string[] = [];
    let potentialRelMatches: string[] = [];

    guess.split('').forEach((char, i) => {
      if (char === answer.at(i)?.toUpperCase()) {
        exactMatchIndicdes.push(true);
        exactKeys.push(char);
      } else {
        exactMatchIndicdes.push(false);
        potentialRelMatches.push(answer[i]);
      }
    });

    guess.split('').forEach((char, i) => {
      if (
        potentialRelMatches.includes(char.toLowerCase()) &&
        !exactMatchIndicdes[i]
      ) {
        relativeMatchIndices.push(true);
        relativeKeys.push(char);
      } else {
        relativeMatchIndices.push(false);
      }
    });

    guess.split('').forEach((char, i) => {
      if (!exactKeys.includes(char) && !relativeKeys.includes(char)) {
        noMatchKeys.push(char);
      }
    });

    const tempExactMatches = exactMatches.slice();
    const tempRelativeMatches = relativeMatches.slice();
    tempExactMatches.push(exactMatchIndicdes);
    tempRelativeMatches.push(relativeMatchIndices);
    setExactMatches(tempExactMatches);
    setRelativeMatches(tempRelativeMatches);

    const tempExactKeys = exactMatchKeys.slice();
    const tempRelKeys = relativeMatchKeys.slice();
    const tempNoMatchKeys = noMatchKeys.slice();
    tempExactKeys.push(...exactKeys);
    tempRelKeys.push(...relativeKeys);
    tempNoMatchKeys.push(...noMatchKeys);
    setExactMatchKeys(tempExactKeys);
    setRelativeMatchKeys(tempRelKeys);
    setNoMatchKeys(tempNoMatchKeys);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
    setAnswer(possibleAnswers[randomIndex]);
    console.log(possibleAnswers[randomIndex]);
  }, []);

  return {
    exactMatches,
    relativeMatches,
    exactMatchKeys,
    relativeMatchKeys,
    noMatchKeys,
    validateGuess,
  };
}

export default useAnswerValidator;
