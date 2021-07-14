import React from 'react';
import { range } from 'ramda';
import GuitarFret from './GuitarFret';

export default function GuitarString({ noteIndex }) {
  const noteOffsets = range(0, 13);

  return noteOffsets.map((noteOffset) => <GuitarFret noteIndex={noteIndex + noteOffset} />);
}
