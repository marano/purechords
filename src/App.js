import React from 'react';
import { range } from 'ramda';
import MajorScale from './MajorScale';

export default function App() {
  const notes = range(0, 12);

  return notes.map((noteIndex) => <div><MajorScale key={noteIndex} keyIndex={noteIndex} /></div>);
}
