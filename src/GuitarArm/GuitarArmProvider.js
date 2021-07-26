import React from 'react';
import { range, xprod } from 'ramda';
import GuitarArmContext from './GuitarArmContext';
import useSelectionContext from '../useSelectionContext';
import { rotateNoteIndex } from '../notes';

export default function GuitarArmProvider({ strings, fretCount, children }) {
  const {
    selectedNote,
    selectedNoteSequence,
  } = useSelectionContext();

  const value = {
    fretCount,
    getNote,
    isFretHighlighted,
  };

  return (
    <GuitarArmContext.Provider value={value}>
      {children}
    </GuitarArmContext.Provider>
  );

  function getNote(stringIndex, fretIndex) {
    return rotateNoteIndex(strings[stringIndex] + fretIndex);
  }

  function isFretHighlighted(stringIndex, fretIndex) {
    if (selectedNote !== null) {
      return getNote(stringIndex, fretIndex) === selectedNote;
    }

    if (selectedNoteSequence !== null) {
      const stringStart = 0;
      const stringEnd = strings.length - 1;

      const fretStart = 0;
      const fretEnd = 5;

      const stringRange = range(stringStart, stringEnd + 1).reverse();
      const fretRange = range(fretStart, fretEnd + 1);

      const fretCoordinates = xprod(stringRange, fretRange);

      return selectedNoteSequence.map((note) => {
          while (fretCoordinates.length) {
            const nextCoordinates = fretCoordinates.shift();

            if (note === getNote(nextCoordinates[0], nextCoordinates[1])) {
              return nextCoordinates;
            }
          }
        })
        .filter(Boolean)
        .some(
          ([highlightedStringIndex, highlightedFretIndex]) => highlightedStringIndex === stringIndex
            && highlightedFretIndex === fretIndex,
        );
    }
  }
}
