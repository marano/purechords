import React from 'react';
import GuitarArmContext from './GuitarArmContext';
import { rotateNoteIndex } from '../notes';

export default function GuitarArmProvider({ strings, fretCount, children }) {
  return (
    <GuitarArmContext.Provider value={{ fretCount, getNoteIndex }}>
      {children}
    </GuitarArmContext.Provider>
  );

  function getNoteIndex(stringIndex, fretIndex) {
    return rotateNoteIndex(strings[stringIndex] + fretIndex);
  }
}
