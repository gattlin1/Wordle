import React from 'react';
import './CharSquare.scss';

interface CharSquareProps {
  char: string;
}

function CharSquare({ char }: CharSquareProps) {
  return <span className='CharSquare'>{char}</span>;
}

export default CharSquare;
