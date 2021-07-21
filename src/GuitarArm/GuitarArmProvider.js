import React from 'react';
import { range, xprod } from 'ramda';
import GuitarArmContext from './GuitarArmContext';
import useHighlightedNote from '../useHighlightedNote';
import { rotateNoteIndex } from '../notes';

export default function GuitarArmProvider({ strings, fretCount, children }) {
  const {
    highlightedNote,
    highlightedNoteSequence,
  } = useHighlightedNote();

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
    if (highlightedNote !== null) {
      return getNoteIndex(stringIndex, fretIndex) === highlightedNote;
    }

    if (highlightedNoteSequence !== null) {
      const stringStart = 0;
      const stringEnd = strings.length - 1;

      const fretStart = 2;
      const fretEnd = 6;

      const stringRange = range(stringStart, stringEnd + 1).reverse();
      const fretRange = range(fretStart, fretEnd + 1);

      const fretCoordinates = xprod(stringRange, fretRange);

      return highlightedNoteSequence
        .map((noteIndex) => {
          while (fretCoordinates.length) {
            const nextCoordinates = fretCoordinates.shift();

            if (noteIndex === getNoteIndex(nextCoordinates[0], nextCoordinates[1])) {
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
