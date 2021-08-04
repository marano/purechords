import { Note } from '../types'
import GuitarArm from './GuitarArm'
import Scales from './Scales'
import SelectionProvider from './SelectionProvider'
import Chords from './Chords'
import Voicings from './Voicings'

export default function App() {
  return (
    <SelectionProvider>
      <Scales />
      <Chords />
      <Voicings />
      <GuitarArm strings={[Note.E, Note.A, Note.D, Note.G, Note.B, Note.E]} fretCount={21} />
    </SelectionProvider>
  )
}
