import React from 'react';
import HighligthableNote from './HighlitableNote';
import { noteIndexes } from './notes';

export default function ChromaticScale() {
  return noteIndexes.map((noteIndex) => <HighligthableNote key={noteIndex} index={noteIndex} />);
}
