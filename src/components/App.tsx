import { Note } from '../types'
import GuitarArm from './GuitarArm'
import ChromaticScale from './ChromaticScale'
import Scales from './Scales'
import SelectionProvider from './SelectionProvider'
import RelativeNotes from './RelativeNotes'
import Chords from './Chords'

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
      <GuitarArm strings={[Note.E, Note.B, Note.G, Note.D, Note.A, Note.E]} fretCount={21} />
    </SelectionProvider>
  )
}
