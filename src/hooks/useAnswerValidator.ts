import { useEffect, useState } from 'react';
import { possibleAnswers } from '../word-list/possible-answers';

function useAnswerValidator() {
  const [answer, setAnswer] = useState('');
  const [correctIndices, setCorrectIndices] = useState<boolean[][]>([]);
  const [presentIndices, setPresentIndices] = useState<boolean[][]>([]);
  const [correctKeys, setCorrectKeys] = useState<string[]>([]);
  const [presentKeys, setPresentKeys] = useState<string[]>([]);
  const [absentKeys, setAbsentKeys] = useState<string[]>([]);

  const validateGuess = (guess: string) => {
    const newCorrectIndicdes: boolean[] = [];
    const newPresentIndices: boolean[] = [];
    const correctKeys: string[] = [];
    const presentKeys: string[] = [];
    let potentiallyPresent: string[] = [];

    guess.split('').forEach((char, i) => {
      if (char === answer.at(i)?.toUpperCase()) {
        newCorrectIndicdes.push(true);
        correctKeys.push(char);
      } else {
        newCorrectIndicdes.push(false);
        potentiallyPresent.push(answer[i]);
      }
    });

    guess.split('').forEach((char, i) => {
      if (
        potentiallyPresent.includes(char.toLowerCase()) &&
        !newCorrectIndicdes[i]
      ) {
        newPresentIndices.push(true);
        presentKeys.push(char);
      } else {
        newPresentIndices.push(false);
      }
    });

    guess.split('').forEach((char, i) => {
      if (!correctKeys.includes(char) && !presentKeys.includes(char)) {
        absentKeys.push(char);
      }
    });

    const tempCorrectMatches = correctIndices.slice();
    const tempPresentMatches = presentIndices.slice();
    tempCorrectMatches.push(newCorrectIndicdes);
    tempPresentMatches.push(newPresentIndices);
    setCorrectIndices(tempCorrectMatches);
    setPresentIndices(tempPresentMatches);

    const tempCorrectKeys = correctKeys.slice();
    const tempPresentKeys = presentKeys.slice();
    const tempabsentKeys = absentKeys.slice();
    tempCorrectKeys.push(...correctKeys);
    tempPresentKeys.push(...presentKeys);
    tempabsentKeys.push(...absentKeys);
    setCorrectKeys(tempCorrectKeys);
    setPresentKeys(tempPresentKeys);
    setAbsentKeys(tempabsentKeys);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
    setAnswer(possibleAnswers[randomIndex]);
    console.log(possibleAnswers[randomIndex]);
  }, []);

  return {
    correctIndices,
    presentIndices,
    correctKeys,
    presentKeys,
    absentKeys,
    validateGuess,
  };
}

export default useAnswerValidator;
