import React from 'react';
import GuitarArmContext from './GuitarArmContext';

export default function GuitarArmProvider({ strings, fretCount, children }) {
  return (
    <GuitarArmContext.Provider value={{ fretCount, getNoteIndex }}>
      {children}
    </GuitarArmContext.Provider>
  );

  function getNoteIndex(stringIndex, fretIndex) {
    return strings[stringIndex] + fretIndex;
  }
}
