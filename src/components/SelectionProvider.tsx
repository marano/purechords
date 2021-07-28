import { useState, ReactNode } from 'react';
import { equals } from 'ramda';
import { Note } from '../types';
import { intervalsToNotes } from '../utils/notes';
import SelectionContext from './SelectionContext';

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [selectedIntervals, setSelectedIntervals] = useState<number[] | null>(null);
  const [selectedScaleNotes, setSelectedScaleNotes] = useState<Note[] | null>(null);

  const selectedIntervalNotes = selectedNote !== null && selectedIntervals
    ? intervalsToNotes(selectedIntervals, selectedNote)
    : null

  const value = {
    selectedNote,
    setSelectedNote(note: Note | null) {
      if (selectedNote === note) {
        setSelectedNote(null);
      } else {
        setSelectedScaleNotes(null);
        setSelectedNote(note);
      }
    },

    selectedScaleNotes,
    setSelectedScaleNotes(noteSequence: Note[] | null) {
      if (equals(selectedScaleNotes, noteSequence)) {
        setSelectedScaleNotes(null);
      } else {
        setSelectedNote(null);
        setSelectedScaleNotes(noteSequence);
      }
    },

    selectedIntervals,
    setSelectedIntervals,

    selectedIntervalNotes
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}
