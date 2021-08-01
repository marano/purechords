import useSelectionContext from '../useSelectionContext'
import ChordSelection from './ChordSelection'

export default function Chords() {
  const { selectedScaleNotes } = useSelectionContext()

  if (!selectedScaleNotes) {
    return null
  }

  return <ChordSelection />
}
