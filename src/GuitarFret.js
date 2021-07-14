import React from 'react';
import getNoteName from './getNoteName';

export default function GuitarFret({ stringNoteIndex, fretIndex }) {
  return (
    <div className={fretIndex === 0 ? 'open-string' : ''}>
      {getNoteName(stringNoteIndex + fretIndex)}
    </div>
  );
}
