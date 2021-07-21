import React from 'react';
import Grid from './Grid';
import ClickableNote from './ClickableNote';
import { noteIndexes } from './notes';
import useHighlightedNote from './useHighlightedNote';

export default function ChromaticScale() {
  const { highlightedNote, setHighlightedNote } = useHighlightedNote();

  return (
    <Grid columnCount={12}>
      {noteIndexes.map(
        (noteIndex) => (
          <ClickableNote
            key={noteIndex}
            index={noteIndex}
            isHighlighted={noteIndex === highlightedNote}
            onClick={() => setHighlightedNote(noteIndex)}
          />
        ),
      )}
    </Grid>
  );
}
