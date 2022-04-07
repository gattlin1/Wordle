import React, { useState } from 'react';
import { possibleAnswers } from '../word-list/possible-answers';

function useAnswerGen() {
  const [genAnswer, setGenAnswer] = useState('');
  const randomIndex = Math.floor(Math.random() * possibleAnswers.length);

  setGenAnswer(possibleAnswers[randomIndex]);

  return genAnswer;
}

export default useAnswerGen;
