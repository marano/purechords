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
              intervals={
                getIntervals(
                  index,
                  selectedChordType,
                  selectedScaleIntervals
                )
              }
            />
        )}
      </Grid>
      <Separator />
    </>
  )
}

function getIntervals(
  index: number,
  chordIntervals: Interval[],
  scaleIntervals: Interval[]
) {
  return chordIntervals.map(
    chordInterval =>
      getInterval(
        scaleIntervals,
        chordInterval,
        index
      )
  )
}

function getInterval(
  scaleIntervals: Interval[],
  chordInterval: Interval,
  index: number
) {
  return scaleIntervals[
    rotateNumber(
      index + chordInterval,
      scaleIntervals.length - 1
    )
  ] - scaleIntervals[index]
}
