import React, { useState } from 'react';
import SelectionContext from './SelectionContext';

export default function SelectionProvider({ children }) {
  const [selectedNote, setSelectedNote] = useState();
  const [selectedIntervals, setSelectedIntervals] = useState();
  const [selectedScaleNotes, setSelectedScaleNotes] = useState();

  const value = {
    selectedNote,
    setSelectedNote(note) {
      setSelectedScaleNotes(null);
      setSelectedNote(note);
    },

    selectedScaleNotes,
    setSelectedScaleNotes(noteSequence) {
      setSelectedNote(null);
      setSelectedScaleNotes(noteSequence);
    },

    selectedIntervals,
    setSelectedIntervals
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}
