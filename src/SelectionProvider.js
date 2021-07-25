import React, { useState } from 'react';
import SelectionContext from './SelectionContext';

export default function SelectionProvider({ children }) {
  const [selectedNote, setSelectedNote] = useState();
  const [selectedNoteSequence, setSelectedNoteSequence] = useState();

  const value = {
    selectedNote,
    selectedNoteSequence,

    setSelectedNote(note) {
      setSelectedNoteSequence(null);
      setSelectedNote(note);
    },

    setSelectedNoteSequence(noteSequence) {
      setSelectedNote(null);
      setSelectedNoteSequence(noteSequence);
    },
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
}
