import React from 'react';
import Grid from './Grid';
import ClickableNoteName from './ClickableNoteName';
import { notes } from './notes';
import useSelectionContext from './useSelectionContext';

export default function ChromaticScale() {
  const { selectedNote, setSelectedNote } = useSelectionContext();

  return (
    <Grid columnCount={12}>
      {notes.map(
        (note) => (
          <ClickableNoteName
            key={note}
            note={note}
            isHighlighted={note === selectedNote}
            onClick={() => setSelectedNote(note)}
          />
        ),
      )}
    </Grid>
  );
}
