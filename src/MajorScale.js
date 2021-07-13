import React from 'react';
import { sum } from 'ramda';
import Note from './Note';

export default function MajorScale({ keyIndex }) {
  const tone = 2;
  const semiTone = 1;

  const intervals = [0, tone, tone, semiTone, tone, tone, tone, semiTone];

  const notes = intervals.map((_, index) => keyIndex + sum(intervals.slice(0, index + 1)));

  return notes.map(
    (noteIndex) => <Note key={noteIndex} index={noteIndex} />,
  );
}
