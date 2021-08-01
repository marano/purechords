import { Interval } from '../../types'
import getScaleNotes from '../../utils/getScaleNotes'
import rotateNumber from '../../utils/rotateNumber'
import Grid from '../Grid'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'
import ChordOption from './ChordOption'

export default function ChordSelection() {
  const {
    selectedScaleIntervals,
    selectedScale,
    selectedChordType,
  } = useSelectionContext()

  if (
    selectedScaleIntervals === undefined ||
    selectedScale === undefined ||
    selectedChordType === undefined
  ) {
    return null
  }

  const selectedScaleNotes = getScaleNotes(selectedScale)

  return (
    <>
      <Grid columnCount={selectedScaleNotes.length}>
        {selectedScaleNotes.map(
          (note, index) =>
            <ChordOption
              key={`${index}-${note}`}
              note={note}
              intervals={intervals(index, selectedChordType, selectedScaleIntervals)}
            />
        )}
      </Grid>
      <Separator />
    </>
  )
}

function intervals(
  index: number,
  chordIntervals: Interval[],
  scaleIntervals: Interval[]
) {
  return chordIntervals.map(
    interval => scaleIntervals[
      rotateNumber(
        index + interval,
        scaleIntervals.length - 1
      )
    ] - scaleIntervals[index]
  )
}
