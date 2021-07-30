import GuitarArm from './GuitarArm';
import ChromaticScale from './ChromaticScale';
import MajorScales from './MajorScales';
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
      <MajorScales />
      <br />
      <Chords />
      <br />
      <br />
      <GuitarArm strings={[4, 11, 7, 2, 9, 4]} fretCount={13} />
    </SelectionProvider>
  );
}
