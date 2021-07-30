import { useState, ReactNode } from 'react';
import { Interval, Note } from '../types';
import areNumberArraysEquals from '../utils/areNumberArraysEquals';
import { intervalsToNotes } from '../utils/notes';
import SelectionContext from './SelectionContext';

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [selectedNote, setSelectedNote] = useState<Note | undefined>();
  const [selectedIntervals, setSelectedIntervals] = useState<Interval[] | undefined>();
  const [selectedScaleNotes, setSelectedScaleNotes] = useState<Note[] | undefined>();
  const [selectedChordKey, setSelectedChordKey] = useState<Note | undefined>();

  const selectedIntervalNotes = selectedNote !== undefined && selectedIntervals
    ? intervalsToNotes(selectedIntervals, selectedNote)
    : undefined

  const value = {
    selectedNote,
    setSelectedNote(note?: Note) {
      if (selectedNote === note) {
        setSelectedNote(undefined);
      } else {
        setSelectedScaleNotes(undefined);
        setSelectedNote(note);
      }
    },

    selectedScaleNotes,
    setSelectedScaleNotes(noteSequence?: Note[]) {
      if (selectedScaleNotes && noteSequence && areNumberArraysEquals(selectedScaleNotes, noteSequence)) {
        setSelectedScaleNotes(undefined);
      } else {
        setSelectedNote(undefined);
        setSelectedScaleNotes(noteSequence);
      }
    },

    selectedIntervals,
    setSelectedIntervals,
    selectedIntervalNotes,

    selectedChordKey,
    setSelectedChordKey(key?: Note) {
      if (key === selectedChordKey) {
        setSelectedChordKey(undefined)
      } else {
        setSelectedChordKey(key)
      }
    }
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}