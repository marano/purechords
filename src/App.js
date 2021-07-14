import React from 'react';
import { range } from 'ramda';
import MajorScale from './MajorScale';
import GuitarArm from './GuitarArm';

export default function App() {
  const notes = range(0, 12);

  return (
    <>
      <div>
        {notes.map((noteIndex) => <div><MajorScale key={noteIndex} keyIndex={noteIndex} /></div>)}
      </div>
      <br />
      <br />
      <div>
        <GuitarArm fretCount={13} />
      </div>
    </>
  );
}
