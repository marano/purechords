import React from 'react';
import { range } from 'ramda';
import GuitarFret from './GuitarFret';

export default function GuitarString({ noteIndex, fretCount }) {
  const noteOffsets = range(0, fretCount);

  return noteOffsets.map(
    (noteOffset) => <GuitarFret stringNoteIndex={noteIndex} fretIndex={noteOffset} />,
  );
}
