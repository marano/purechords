import React from 'react';
import MajorScale from './MajorScale';
import GuitarArm from './GuitarArm';
import { noteIndexes } from './notes';
import ChromaticScale from './ChromaticScale';
import NoteHighlightProvider from './NoteHighlightProvider';

export default function App() {
  return (
    <NoteHighlightProvider>
      <div>
        <ChromaticScale />
      </div>
      <br />
      <br />
      <div>
        {noteIndexes.map(
          (noteIndex) => <div><MajorScale key={noteIndex} keyIndex={noteIndex} /></div>,
        )}
      </div>
      <br />
      <br />
      <div>
        <GuitarArm strings={[4, 11, 7, 2, 9, 4]} fretCount={13} />
      </div>
    </NoteHighlightProvider>
  );
}
