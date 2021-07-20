import React from 'react';
import Grid from './Grid';
import MajorScale from './MajorScale';
import { majorScaleIntervals, noteIndexes } from './notes';

export default function MajorScales() {
  return (
    <Grid columnCount={majorScaleIntervals.length}>
      {noteIndexes.map(
        (noteIndex) => <MajorScale key={noteIndex} keyIndex={noteIndex} />,
      )}
    </Grid>
  );
}
