import { Note } from '../types'
import GuitarArm from './GuitarArm'
import Scales from './Scales'
import SelectionProvider from './SelectionProvider'
import Chords from './Chords'
import Separator from './Separator'

export default function App() {
  return (
    <SelectionProvider>
      <Scales />
      <Separator />
      <Chords />
      <GuitarArm strings={[Note.E, Note.A, Note.D, Note.G, Note.B, Note.E]} fretCount={21} />
    </SelectionProvider>
  )
}
