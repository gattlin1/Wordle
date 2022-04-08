import React from 'react';
import './CharSquare.scss';

interface CharSquareProps {
  char: string | undefined;
  className: string | undefined;
}

function CharSquare({ char, className }: CharSquareProps) {
  const classes = ['CharSquare', className].join(' ');
  return <span className={classes}>{char}</span>;
}

export default CharSquare;
