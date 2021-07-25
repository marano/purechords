import React from 'react';
import Grid from './Grid';
import ClickableNote from './ClickableNote';
import { noteIndexes } from './notes';
import useSelectionContext from './useSelectionContext';

export default function ChromaticScale() {
  const { selectedNote, setSelectedNote } = useSelectionContext();

  return (
    <Grid columnCount={12}>
      {noteIndexes.map(
        (noteIndex) => (
          <ClickableNote
            key={noteIndex}
            index={noteIndex}
            isHighlighted={noteIndex === selectedNote}
            onClick={() => setSelectedNote(noteIndex)}
          />
        ),
      )}
    </Grid>
  );
}
