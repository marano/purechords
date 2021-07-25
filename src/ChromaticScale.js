import React from 'react';
import Grid from './Grid';
import ClickableNote from './ClickableNote';
import { notes } from './notes';
import useSelectionContext from './useSelectionContext';

export default function ChromaticScale() {
  const { selectedNote, setSelectedNote } = useSelectionContext();

  return (
    <Grid columnCount={12}>
      {notes.map(
        (note) => (
          <ClickableNote
            key={note}
            index={note}
            isHighlighted={note === selectedNote}
            onClick={() => setSelectedNote(note)}
          />
        ),
      )}
    </Grid>
  );
}
