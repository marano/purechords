import React from 'react';
import { equals, range, xprod } from 'ramda';
import GuitarArmContext from './GuitarArmContext';
import useSelectionContext from '../useSelectionContext';
import { rotateNoteIndex } from '../notes';

export default function GuitarArmProvider({ strings, fretCount, children }) {
  const {
    selectedNote,
    selectedScaleNotes,
  } = useSelectionContext();

  const value = {
    fretCount,
    getNote,
    isFretHighlighted,
  };

  const highlightedFrets = getHighlightedFrets()

  return (
    <GuitarArmContext.Provider value={value}>
      {children}
    </GuitarArmContext.Provider>
  );

  function getNote(stringIndex, fretIndex) {
    return rotateNoteIndex(strings[stringIndex] + fretIndex);
  }

  function getHighlightedFrets() {
    if (selectedNote !== null) {
      const stringStart = 0;
      const stringEnd = strings.length - 1;

      const fretStart = 0;
      const fretEnd = fretCount - 1;

      return getFrets(stringStart, stringEnd, fretStart, fretEnd)
        .filter(([stringIndex, fretIndex]) => getNote(stringIndex, fretIndex) === selectedNote)
    }

    if (selectedScaleNotes !== null) {
      const stringStart = 0;
      const stringEnd = strings.length - 1;

      const fretStart = 0;
      const fretEnd = 5;

      const fretCoordinates = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      return selectedScaleNotes
        .map((note) => {
          while (fretCoordinates.length) {
            const nextCoordinates = fretCoordinates.shift();

            if (note === getNote(nextCoordinates[0], nextCoordinates[1])) {
              return nextCoordinates;
            }
          }
        })
        .filter(Boolean)
    }
  }

  function isFretHighlighted(stringIndex, fretIndex) {
    const fret = [stringIndex, fretIndex]

    return highlightedFrets.some(equals(fret))
  }

  function getFrets(stringStart, stringEnd, fretStart, fretEnd) {
    const stringRange = range(stringStart, stringEnd + 1).reverse();
    const fretRange = range(fretStart, fretEnd + 1);

    return xprod(stringRange, fretRange);
  }
}
