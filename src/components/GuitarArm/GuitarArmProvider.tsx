import { ReactNode } from 'react';
import { equals, range, xprod } from 'ramda';
import { Note } from '../../types';
import isNonNullable from '../../utils/isNonNullable';
import { rotateNoteIndex } from '../../utils/notes';
import useSelectionContext from '../useSelectionContext';
import GuitarArmContext from './GuitarArmContext';

type Props = {
  strings: Note[]
  fretCount: number
  children: ReactNode
}

export default function GuitarArmProvider({ strings, fretCount, children }: Props) {
  const {
    selectedNote,
    selectedScaleNotes,
    selectedIntervalNotes
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

  function getNote(stringIndex: number, fretIndex: number) {
    return rotateNoteIndex(strings[stringIndex] + fretIndex);
  }

  function getHighlightedFrets(): [number, number][] {
    if (selectedNote !== null) {
      const stringStart = 0;
      const stringEnd = strings.length - 1;

      const fretStart = 0;
      const fretEnd = fretCount - 1;

      const highlightedNotes = [selectedNote, ...(selectedIntervalNotes || [])]

      return getFrets(stringStart, stringEnd, fretStart, fretEnd)
        .filter(
          ([stringIndex, fretIndex]) =>
            highlightedNotes.includes(getNote(stringIndex, fretIndex))
        )
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
            const nextCoordinates = fretCoordinates.shift()!;

            if (note === getNote(nextCoordinates[0], nextCoordinates[1])) {
              return nextCoordinates;
            }

          }
        }).filter(isNonNullable)
    }

    return []
  }

  function isFretHighlighted(stringIndex: number, fretIndex: number) {
    const fret = [stringIndex, fretIndex]

    return highlightedFrets.some(equals(fret))
  }

  function getFrets(stringStart: number, stringEnd: number, fretStart: number, fretEnd: number) {
    const stringRange = range(stringStart, stringEnd + 1).reverse();
    const fretRange = range(fretStart, fretEnd + 1);

    return xprod(stringRange, fretRange);
  }
}
