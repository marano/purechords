import AddSelectionButton from './AddSelectionButton'
import Chords from './Chords'
import Guitar from '../Guitar'
import Notes from './Notes'
import PickerProvider from './PickerProvider'
import Scales from './Scales'
import Voicings from './Voicings'

export default function Picker() {
  return (
    <PickerProvider>
      <Notes />
      <Scales />
      <Chords />
      <Voicings />
      <Guitar />
      <AddSelectionButton />
    </PickerProvider>
  )
}
