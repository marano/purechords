import Separator from '../../Separator'
import useSelectionContext from '../../useSelectionContext'
import ChordSelection from './ChordSelection'
import ChordTypeSelection from './ChordTypeSelection'

export default function Chords() {
  const {
    selectedNote,
    selectedScale,
  } = useSelectionContext()

  if (
    selectedNote === undefined
      || selectedScale === undefined
  ) {
    return null
  }

  return (
    <>
      <ChordTypeSelection />
      <Separator />
      <ChordSelection />
    </>
  )
}
