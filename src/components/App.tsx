import { Note } from '../types'
import SelectionProvider from './SelectionProvider'
import Notes from './Notes'
import Scales from './Scales'
import Chords from './Chords'
import Voicings from './Voicings'
import GuitarArm from './GuitarArm'

export default function App() {
  return (
    <SelectionProvider>
      <Notes />
      <Scales />
      <Chords />
      <Voicings />
      <GuitarArm
        strings={[Note.E, Note.A, Note.D, Note.G, Note.B, Note.E]}
        fretCount={21}
      />
    </SelectionProvider>
  )
}
