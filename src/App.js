import React from 'react';
import GuitarArm from './GuitarArm';
import ChromaticScale from './ChromaticScale';
import MajorScales from './MajorScales';
import NoteHighlightProvider from './NoteHighlightProvider';

export default function App() {
  return (
    <NoteHighlightProvider>
      <ChromaticScale />
      <br />
      <MajorScales />
      <br />
      <GuitarArm strings={[4, 11, 7, 2, 9, 4]} fretCount={13} />
    </NoteHighlightProvider>
  );
}
