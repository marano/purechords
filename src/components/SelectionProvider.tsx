import { useState, ReactNode } from 'react';
import { Interval, Note } from '../types';
import areNumberArraysEquals from '../utils/areNumberArraysEquals';
import relativeIntervalsToNotes from '../utils/relativeIntervalsToNotes';
import SelectionContext from './SelectionContext';

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [selectedNote, setSelectedNote] = useState<Note | undefined>();
  const [selectedIntervals, setSelectedIntervals] = useState<Interval[] | undefined>();
  const [selectedScaleNotes, setSelectedScaleNotes] = useState<Note[] | undefined>();
  const [selectedChordNote, setSelectedChordNote] = useState<Note | undefined>();

  const selectedIntervalNotes = selectedNote !== undefined && selectedIntervals
    ? relativeIntervalsToNotes(selectedIntervals, selectedNote)
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

    selectedChordNote,
    setSelectedChordNote(note?: Note) {
      if (note === selectedChordNote) {
        setSelectedChordNote(undefined)
      } else {
        setSelectedChordNote(note)
      }
    }
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}