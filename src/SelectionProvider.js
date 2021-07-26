import React, { useState } from 'react';
import SelectionContext from './SelectionContext';

export default function SelectionProvider({ children }) {
  const [selectedNote, setSelectedNote] = useState();
  const [selectedIntervals, setSelectedIntervals] = useState();
  const [selectedNoteSequence, setSelectedNoteSequence] = useState();

  const value = {
    selectedNote,
    setSelectedNote(note) {
      setSelectedNoteSequence(null);
      setSelectedNote(note);
    },

    selectedNoteSequence,
    setSelectedNoteSequence(noteSequence) {
      setSelectedNote(null);
      setSelectedNoteSequence(noteSequence);
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
