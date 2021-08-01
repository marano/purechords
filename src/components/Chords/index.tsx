import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'
import ChordSelection from './ChordSelection'
import ChordTypeSelection from './ChordTypeSelection'

export default function Chords() {
  const { selectedScaleIntervals, selectedScale } = useSelectionContext()

  if (selectedScaleIntervals === undefined || selectedScale === undefined) {
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