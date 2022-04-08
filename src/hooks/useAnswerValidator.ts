import { useEffect, useState } from 'react';
import { possibleAnswers } from '../word-list/possible-answers';

function useAnswerValidator() {
  const [answer, setAnswer] = useState('');
  const [exactMatches, setExactMatches] = useState<boolean[][]>([]);
  const [relativeMatches, setRelativeMatches] = useState<boolean[][]>([]);

  const validateGuess = (guess: string) => {
    const exactMatchIndicdes: boolean[] = [];
    const relativeMatchIndices: boolean[] = [];
    let potentialRelMatches: string[] = [];

    guess.split('').forEach((char, i) => {
      if (char === answer.at(i)?.toUpperCase()) {
        exactMatchIndicdes.push(true);
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
      } else {
        relativeMatchIndices.push(false);
      }
    });

    // if (tempAnswer.includes(char)) {
    //   relativeMatchIndices.push(true);
    //   tempAnswer.splice(tempAnswer.indexOf(char), 1);
    // } else {
    //   relativeMatchIndices.push(false);
    // }

    const tempExactMatches = exactMatches.slice();
    const tempRelativeMatches = relativeMatches.slice();
    tempExactMatches.push(exactMatchIndicdes);
    tempRelativeMatches.push(relativeMatchIndices);
    console.log('Exact matches', tempExactMatches);
    console.log('Relative matches', tempRelativeMatches);

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
