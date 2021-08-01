import { Note } from '../types'
import GuitarArm from './GuitarArm'
import Scales from './Scales'
import SelectionProvider from './SelectionProvider'
import Chords from './Chords'

export default function App() {
  return (
    <SelectionProvider>
      <Scales />
      <br />
      <Chords />
      <br />
      <br />
      <GuitarArm strings={[Note.E, Note.B, Note.G, Note.D, Note.A, Note.E]} fretCount={21} />
    </SelectionProvider>
  )
}
