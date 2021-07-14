import React from 'react';
import MajorScale from './MajorScale';
import GuitarArm from './GuitarArm';
import { noteIndexes } from './notes';

export default function App() {
  return (
    <>
      <div>
        {noteIndexes.map((noteIndex) => <div><MajorScale key={noteIndex} keyIndex={noteIndex} /></div>)}
      </div>
      <br />
      <br />
      <div>
        <GuitarArm fretCount={13} />
      </div>
    </>
  );
}
