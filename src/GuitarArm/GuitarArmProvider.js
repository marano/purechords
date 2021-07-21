import React from 'react';
import GuitarArmContext from './GuitarArmContext';
import { rotateNoteIndex } from '../notes';
import useHighlightedNote from '../useHighlightedNote';

export default function GuitarArmProvider({ strings, fretCount, children }) {
  const { highlightedNote } = useHighlightedNote();

  const value = {
    fretCount,
    getNoteIndex,
    isFretHighlighted,
  };

  return (
    <GuitarArmContext.Provider value={value}>
      {children}
    </GuitarArmContext.Provider>
  );

  function getNoteIndex(stringIndex, fretIndex) {
    return rotateNoteIndex(strings[stringIndex] + fretIndex);
  }

  function isFretHighlighted(stringIndex, fretIndex) {
    if (highlightedNote) {
      return getNoteIndex(stringIndex, fretIndex) === highlightedNote;
    }
  }
}
