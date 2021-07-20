import React from 'react';
import Note from './Note';
import useGuitarArmContext from './useGuitarArmContext';

export default function GuitarFret({ stringIndex, fretIndex }) {
  const { getNoteIndex } = useGuitarArmContext();

  return (
    <div className={fretIndex === 0 && 'open-string'}>
      <Note index={getNoteIndex(stringIndex, fretIndex)} />
    </div>
  );
}
