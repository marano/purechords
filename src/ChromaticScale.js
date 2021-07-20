import React from 'react';
import Grid from './Grid';
import HighligthableNote from './HighlitableNote';
import { noteIndexes } from './notes';

export default function ChromaticScale() {
  return (
    <Grid columnCount={12}>
      {noteIndexes.map(
        (noteIndex) => <HighligthableNote key={noteIndex} index={noteIndex} />,
      )}
    </Grid>
  );
}
