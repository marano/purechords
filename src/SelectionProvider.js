import React, { useState } from 'react';
import { equals } from 'ramda';
import { intervalsToNotes } from './notes';
import SelectionContext from './SelectionContext';

export default function SelectionProvider({ children }) {
  const [selectedNote, setSelectedNote] = useState();
  const [selectedIntervals, setSelectedIntervals] = useState();
  const [selectedScaleNotes, setSelectedScaleNotes] = useState();

  const selectedIntervalNotes = selectedNote != null
    && selectedIntervals
    && intervalsToNotes(selectedIntervals, selectedNote)

  const value = {
    selectedNote,
    setSelectedNote(note) {
      if (selectedNote === note) {
        setSelectedNote(null);
      } else {
        setSelectedScaleNotes(null);
        setSelectedNote(note);
      }
    },

    selectedScaleNotes,
    setSelectedScaleNotes(noteSequence) {
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
