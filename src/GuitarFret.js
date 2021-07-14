import React from 'react';
import { getNoteName } from './notes';

export default function GuitarFret({ stringNoteIndex, fretIndex }) {
  return (
    <div className={fretIndex === 0 && 'open-string'}>
      {getNoteName(stringNoteIndex + fretIndex)}
    </div>
  );
}
