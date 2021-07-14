import React from 'react';
import getNoteName from './getNoteName';

export default function GuitarFret({ noteIndex }) {
  return (
    <div>
      {getNoteName(noteIndex)}
    </div>
  );
}
