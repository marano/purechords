import scaleIntervals from '../../constants/scaleIntervals'
import { Interval } from '../../types'
import rotateArrayIndex from '../../utils/rotateArrayIndex'
import Grid from '../Grid'
import useSelectionContext from '../useSelectionContext'
import ChordOption from './ChordOption'

export default function ChordSelection() {
  const { selectedScaleNotes } = useSelectionContext()

  if (selectedScaleNotes === undefined) {
    return null
  }

  return (
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