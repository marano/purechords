import { ReactNode } from 'react';
import { cartesian } from 'fp-ts-std/Array'
import { range } from 'fp-ts/NonEmptyArray'
import { Fret, Note } from '../../types';
import areNumberArraysEquals from '../../utils/areNumberArraysEquals';
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

  function getNote(fret: Fret) {
    return rotateNoteIndex(strings[fret[0]] + fret[1]);
  }

  function getHighlightedFrets(): Fret[] {
    if (selectedNote !== null) {
      const stringStart = 0;
      const stringEnd = strings.length - 1;

      const fretStart = 0;
      const fretEnd = fretCount - 1;

      const highlightedNotes = [selectedNote, ...(selectedIntervalNotes || [])]

      return getFrets(stringStart, stringEnd, fretStart, fretEnd)
        .filter(
          (fret) => highlightedNotes.includes(getNote(fret))
        )
    }

    if (selectedScaleNotes !== null) {
      const stringStart = 0;
      const stringEnd = strings.length - 1;

      const fretStart = 0;
      const fretEnd = 5;

      const frets = getFrets(stringStart, stringEnd, fretStart, fretEnd)

      return selectedScaleNotes
        .map((note) => {
          while (frets.length) {
            const nextCoordinates = frets.shift()!;

            if (note === getNote(nextCoordinates)) {
              return nextCoordinates;
            }
          }
        }).filter(isNonNullable)
    }

    return []
  }

  function isFretHighlighted(fret: Fret) {
    return highlightedFrets.some(highlightedFret => areNumberArraysEquals(fret, highlightedFret))
  }

  function getFrets(stringStart: number, stringEnd: number, fretStart: number, fretEnd: number) {
    const stringRange = range(stringStart, stringEnd).reverse();
    const fretRange = range(fretStart, fretEnd);

    return cartesian(stringRange)(fretRange);
  }
}
