import React from 'react';
import './CharSquare.scss';

interface CharSquareProps {
  char: string | undefined;
}

function CharSquare({ char }: CharSquareProps) {
  return <span className='CharSquare'>{char}</span>;
}

export default CharSquare;
