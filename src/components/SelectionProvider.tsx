import { useState, ReactNode } from 'react';
import { equals } from 'ramda';
import { intervalsToNotes } from '../utils/notes';
import SelectionContext from './SelectionContext';

type Props = {
  children: ReactNode
}

export default function SelectionProvider({ children }: Props) {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [selectedIntervals, setSelectedIntervals] = useState<number[] | null>(null);
  const [selectedScaleNotes, setSelectedScaleNotes] = useState<number[] | null>(null);

  const selectedIntervalNotes = selectedNote !== null && selectedIntervals
    ? intervalsToNotes(selectedIntervals, selectedNote)
    : null

  const value = {
    selectedNote,
    setSelectedNote(note: number | null) {
      if (selectedNote === note) {
        setSelectedNote(null);
      } else {
        setSelectedScaleNotes(null);
        setSelectedNote(note);
      }
    },

    selectedScaleNotes,
    setSelectedScaleNotes(noteSequence: number[] | null) {
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
