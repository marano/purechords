import { ChordType, Interval } from '../../types'
import getScaleNotes from '../../utils/getScaleNotes'
import Grid from '../Grid'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'
import ChordOption from './ChordOption'

export default function ChordSelection() {
  const {
    selectedNote,
    selectedScaleIntervals,
    selectedChordType,
  } = useSelectionContext()

  if (
    selectedNote === undefined ||
    selectedScaleIntervals === undefined ||
    selectedChordType === undefined
  ) {
    return null
  }

  const scaleNotes = getScaleNotes(
    selectedScaleIntervals,
    selectedNote
  )

  return (
    <>
      <Grid columnCount={scaleNotes.length}>
        {scaleNotes.map(
          (scaleNote, scaleNoteIndex) =>
            <ChordOption
              key={scaleNote}
              keyNote={scaleNote}
              chordType={selectedChordType}
              intervals={
                getChordIntervals(
                  selectedChordType,
                  selectedScaleIntervals,
                  scaleNoteIndex
                )
              }
            />
        )}
      </Grid>
      <Separator />
    </>
  )
}

function getChordIntervals(
  chordType: ChordType,
  scaleIntervals: Interval[],
  scaleIndex: number
) {
  return chordType.map(
    chordPosition =>
      getScaleIntervalAtIndex(scaleIntervals, scaleIndex + chordPosition)
       - getScaleIntervalAtIndex(scaleIntervals, scaleIndex)
  )
}

function getScaleIntervalAtIndex(
  scaleIntervals: Interval[],
  index: number
) {
  const lastIndex = scaleIntervals.length - 1
  const rotations = Math.floor(index / lastIndex)
  const lastInterval = scaleIntervals[lastIndex]
  const rest = index - (lastIndex * rotations)

  return (rotations * lastInterval) + scaleIntervals[rest]
}