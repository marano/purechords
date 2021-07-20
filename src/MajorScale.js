import React from 'react';
import { sum } from 'ramda';
import Note from './Note';
import { majorScaleIntervals, rotateNoteIndex } from './notes';

export default function MajorScale({ keyIndex }) {
  const notes = majorScaleIntervals
    .map((_, index) => keyIndex + sum(majorScaleIntervals.slice(0, index)))
    .map(rotateNoteIndex);

  return notes.map(
    (noteIndex) => <div key={noteIndex}><Note index={noteIndex} /></div>,
  );
}
