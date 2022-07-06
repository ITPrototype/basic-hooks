import React, { useContext } from 'react';
import { HiContext } from '../index';

const Hookcontext = () => {
  const word = useContext(HiContext)
  return (
    <div>
      Context word: <span style={{color:'blue'}}>{word}</span>
    </div>
  );
}

export default Hookcontext;

// context word taken from index.js