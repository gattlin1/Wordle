import React, { Dispatch, Key, SetStateAction } from 'react';

interface KeyProps {
  char: string;
  clicked: Dispatch<SetStateAction<string[]>>;
}

function KBKey({ char }: KeyProps) {
  return <div>{char}</div>;
}

export default KBKey;
