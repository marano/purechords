import React from 'react';
import { sum } from 'ramda';
import Note from './Note';

export default function MajorScale({ keyIndex }) {
  const tone = 2;
  const semiTone = 1;

  const scale = [0, tone, tone, semiTone, tone, tone, tone, semiTone];

  const intervals = scale.map((_, index) => sum(scale.slice(0, index + 1)));

  return intervals.map(
    (interval) => <Note key={keyIndex + interval} index={keyIndex + interval} />,
  );
}
