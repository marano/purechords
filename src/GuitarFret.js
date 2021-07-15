import React from 'react';
import Note from './Note';

export default function GuitarFret({ stringNoteIndex, fretIndex }) {
  return (
    <div className={fretIndex === 0 && 'open-string'}>
      <Note index={stringNoteIndex + fretIndex} />
    </div>
  );
}
