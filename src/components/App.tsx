import GuitarArm from './GuitarArm';
import ChromaticScale from './ChromaticScale';
import Scales from './Scales';
import SelectionProvider from './SelectionProvider';
import RelativeNotes from './RelativeNotes';
import Chords from './Chords';

export default function App() {
  return (
    <SelectionProvider>
      <ChromaticScale />
      <br />
      <RelativeNotes />
      <br />
      <br />
      <Scales />
      <br />
      <Chords />
      <br />
      <br />
      <GuitarArm strings={[4, 11, 7, 2, 9, 4]} fretCount={13} />
    </SelectionProvider>
  );
}
