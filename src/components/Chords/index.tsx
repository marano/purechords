import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'
import ChordSelection from './ChordSelection'
import ChordTypeSelection from './ChordTypeSelection'

export default function Chords() {
  const {
    selectedNote,
    selectedScaleIntervals,
  } = useSelectionContext()

  if (
    selectedNote === undefined
      || selectedScaleIntervals === undefined
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