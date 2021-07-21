import React from 'react';
import { range } from 'ramda';
import GuitarFret from './GuitarFret';
import useGuitarArmContext from './useGuitarArmContext';

export default function GuitarString({ stringIndex }) {
  const { fretCount } = useGuitarArmContext();

  const fretIndexes = range(0, fretCount);

  return fretIndexes.map(
    (fretIndex) => (
      <GuitarFret
        key={fretIndex}
        stringIndex={stringIndex}
        fretIndex={fretIndex}
      />
    ),
  );
}
