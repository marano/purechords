import scaleIntervals from '../../constants/scaleIntervals'
import { Interval } from '../../types'
import intervalsToNotes from '../../utils/intervalsToNotes'
import rotateArrayIndex from '../../utils/rotateArrayIndex'
import Grid from '../Grid'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'
import ChordOption from './Chord'

export default function ChordSelection() {
  const { selectedScale, selectedChordType } = useSelectionContext()

  if (selectedScale === undefined || selectedChordType === undefined) {
    return null
  }

  const selectedScaleNotes = intervalsToNotes(selectedScale.intervals, selectedScale.key)

  return (
    <>
      <Grid columnCount={selectedScaleNotes.length}>
        {selectedScaleNotes.map(
          (note, index) =>
            <ChordOption
              key={`${index}-${note}`}
              note={note}
              intervals={intervals(index)}
            />
        )}
      </Grid>
      <Separator />
    </>
  )
}

function intervals(index: number) {
  return [
    Interval.U,
    scaleIntervals.major[rotateArrayIndex(index + 2, scaleIntervals.major.slice(0, scaleIntervals.major.length - 1))] - scaleIntervals.major[index],
    scaleIntervals.major[rotateArrayIndex(index + 4, scaleIntervals.major.slice(0, scaleIntervals.major.length - 1))] - scaleIntervals.major[index],
    scaleIntervals.major[rotateArrayIndex(index + 6, scaleIntervals.major.slice(0, scaleIntervals.major.length - 1))] - scaleIntervals.major[index],
  ]
}
