import SelectionProvider from './SelectionProvider'
import Notes from './Notes'
import Scales from './Scales'
import Chords from './Chords'
import Voicings from './Voicings'
import Guitar from './Guitar'
import AddSelectionButton from './AddSelectionButton'
import StudyProvider from './StudyProvider'
import SettingsProvider from './SettingsProvider'
import Study from './Study'

export default function App() {
  return (
    <SettingsProvider>
      <SelectionProvider>
        <StudyProvider>
          <Notes />
          <Scales />
          <Chords />
          <Voicings />
          <Guitar />
          <AddSelectionButton />
          <Study />
        </StudyProvider>
      </SelectionProvider>
    </SettingsProvider>
  )
}
