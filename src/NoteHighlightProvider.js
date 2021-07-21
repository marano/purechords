import React, { useState } from 'react';
import NoteHighlightContext from './NoteHighlightContext';

export default function NoteHighlightProvider({ children }) {
  const [highlightedNote, setHighlightedNote] = useState();
  const [highlightedNoteSequence, setHighlightedNoteSequence] = useState();

  const value = {
    highlightedNote,
    highlightedNoteSequence,

    setHighlightedNote(note) {
      setHighlightedNoteSequence(null);
      setHighlightedNote(note);
    },

    setHighlightedNoteSequence(noteSequence) {
      setHighlightedNote(null);
      setHighlightedNoteSequence(noteSequence);
    },
  };

  return (
    <NoteHighlightContext.Provider value={value}>
      {children}
    </NoteHighlightContext.Provider>
  );
}
