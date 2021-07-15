import React, { useState } from 'react';
import NoteHighlightContext from './NoteHighlightContext';

export default function NoteHighlightProvider({ children }) {
  const [highlightedNote, setHighlightedNote] = useState();

  return (
    <NoteHighlightContext.Provider value={{ highlightedNote, setHighlightedNote }}>
      {children}
    </NoteHighlightContext.Provider>
  );
}
